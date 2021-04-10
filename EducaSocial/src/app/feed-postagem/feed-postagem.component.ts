import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
 

import { environment } from 'src/environments/environment.prod';
import { Comentario } from '../models/Comentario';
import { Postagem } from '../models/Postagem';
import { Tema } from '../models/Tema';
import { User } from '../models/user';
import { ComentarioService } from '../service/comentario.service';
import { GrupoService } from '../service/grupo.service';
import { PostagemService } from '../service/postagem.service';


@Component({
  selector: 'app-feed-postagem',
  templateUrl: './feed-postagem.component.html',
  styleUrls: ['./feed-postagem.component.css']
})
export class FeedPostagemComponent implements OnInit {

  constructor(public router: Router,
    private postagemService: PostagemService,
    private comentarioService: ComentarioService, 
    private grupoService: GrupoService) { }

  postagemDoTema: Postagem[];
  novaPostagem: Postagem = new Postagem();
  temaAtual: Tema = new Tema();

  //para editar tema
  postEditado: Postagem = new Postagem();
  userId: number;
  userFoto: string;

  //para fazer o comentario 
  comentarioNovo: Comentario = new Comentario(); 
  
  //para quando estiver no grupo
  

  ngOnInit() {
    if (environment.token === '') {
      this.router.navigate(['/entrar']);
    }
    this.getPostagemAtual();
    this.parsePostagem();
    this.userId = environment.id;
    this.userFoto = environment.foto;
  }


  parsePostagem() {
    //para todos as publicações que nao tem usuário eu coloco um id e foto
    if (this.postagemDoTema !== undefined) {
      this.postagemDoTema.map((post: Postagem) => {
        if (post.usuario === null) {
          post.usuario = new User();
          post.usuario.nome = "Desconhecido";
          post.usuario.url_foto = "https://i.imgur.com/i3cXlrq.png";
          post.usuario.id_usuario = -1;
        }
        if (post.usuario.url_foto === null) {
          post.usuario.url_foto = "https://i.imgur.com/i3cXlrq.png";
        }

        //para todos os comentários sem usuário eu coloco um id e foto
        this.parseComentario(post.comentarioList);
      })


    }
  }

  publicar() {
    if (this.router.url === '/home-usuario/tema/postagens') {
      //faço uma postagem para um tema específico
      this.temaAtual.id_tema = environment.idTema;
      this.novaPostagem.temaList = new Array();
      this.novaPostagem.temaList.push(this.temaAtual)
      //faço a chamada no service 
      this.postagemService.postPostagem(this.novaPostagem).subscribe((resp: Postagem) => {
        this.novaPostagem = resp;
        alert("post cadastrado com sucesso");
        this.postagemDoTema.push(this.novaPostagem);
        this.novaPostagem = new Postagem();
      })
    }else if(this.router.url === '/grupo-home/posts'){
      //coloco os temas do grupo na postagem 
      this.novaPostagem.temaList = new Array();

      //cadastro a postagem 


      //vinculo a postagem com o grupo

    }

  }


  getPostagemAtual() {
    this.postagemDoTema = this.postagemService.getPostagens();
  }

  setPostagemEdit(post: Postagem) {
    this.postEditado = post;
  }

  editar() {
    if (this.router.url === '/home-usuario/tema/postagens') {
      const index = this.postagemDoTema.indexOf(this.postEditado);
      this.postagemService.putPostagem(this.postEditado).subscribe((resp: Postagem) => {
        this.postEditado = resp;
      });
      this.postagemDoTema[index] = this.postEditado;
    }
  }

  apagar(post: Postagem) {
    if (this.router.url === '/home-usuario/tema/postagens') {
      const index = this.postagemDoTema.indexOf(post);
      this.postagemService.deletePostagem(post.id_postagem).subscribe(() => {
        this.postagemDoTema.splice(index, 1);
      })
    }

  }

  parseComentario(comentarioList: Comentario[]) {
    if (comentarioList !== undefined) {
      comentarioList.map((comment: Comentario) => {
        if (comment.usuario === null) {
          comment.usuario = new User();
          comment.usuario.nome = "Desconhecido";
          comment.usuario.url_foto = "https://i.imgur.com/i3cXlrq.png";
          comment.usuario.id_usuario = -1;
        }
        if (comment.usuario.url_foto === null) {
          comment.usuario.url_foto = "https://i.imgur.com/i3cXlrq.png";
        }

      })
    }
  }

  addUsuarioAoComentario(comentario: Comentario){
     //colocar os dados do usuário no comentário 
     this.comentarioNovo.usuario= new User();
     this.comentarioNovo.usuario.id_usuario= environment.id;
     this.comentarioNovo.usuario.nome= environment.nome;
     this.comentarioNovo.foto= environment.foto;
  }

 
  publicarComentario(post: Postagem) {
    if (this.router.url === '/home-usuario/tema/postagens') {
      const index = this.postagemDoTema.indexOf(post);
      this.addUsuarioAoComentario(this.comentarioNovo);
      //acrescento um comentário a postagem
      this.comentarioService.postComentario(this.comentarioNovo, post.id_postagem).subscribe((resp: Comentario) => {
        this.comentarioNovo = resp;

        //verifico se o comentário está definido 
        if (this.postagemDoTema[index].comentarioList === undefined) {
          this.postagemDoTema[index].comentarioList = new Array();
        }
        this.postagemDoTema[index].comentarioList.push(this.comentarioNovo);

        //limpo o comentário
       this.comentarioNovo= new Comentario();
       console.log()
      });
     }
  }

  
}
