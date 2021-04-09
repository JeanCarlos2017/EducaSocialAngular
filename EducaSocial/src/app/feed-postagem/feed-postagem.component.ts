import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../models/Postagem';
import { Tema } from '../models/Tema';
import { User } from '../models/user';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed-postagem',
  templateUrl: './feed-postagem.component.html',
  styleUrls: ['./feed-postagem.component.css']
})
export class FeedPostagemComponent implements OnInit {

  constructor(public router: Router,
    private postagemService: PostagemService) { }

  postagemDoTema: Postagem[];
  novaPostagem: Postagem = new Postagem();
  temaAtual: Tema = new Tema();


  ngOnInit() {
    if (environment.token === '') {
      this.router.navigate(['/entrar']);
    }
    this.getPostagemAtual();
    this.parsePostagem();

  }


  parsePostagem() {
    if (this.postagemDoTema !== undefined) {
      this.postagemDoTema.map((post: Postagem) => {
        if (post.usuario === null) {
          post.usuario = new User();
          post.usuario.nome = "Desconhecido";
          post.usuario.url_foto = "https://i.imgur.com/i3cXlrq.png";
        }
        if (post.usuario.url_foto === null) {
          post.usuario.url_foto = "https://i.imgur.com/i3cXlrq.png";
        }

      })
    }
  }

  publicar() {
    if (this.router.url === '/home-usuario/tema/postagens') {
      //faço uma postagem para um tema específico
      this.temaAtual.id_tema = environment.idTema;
      this.novaPostagem.temaList= new Array();
      this.novaPostagem.temaList.push(this.temaAtual)
      //faço a chamada no service 
      this.postagemService.postPostagem(this.novaPostagem).subscribe ( (resp: Postagem)=>{
        this.novaPostagem= resp;
        alert("post cadastrado com sucesso");
        this.postagemDoTema.push(this.novaPostagem);
        this.novaPostagem= new Postagem();
      })
    }

  }

  
  getPostagemAtual(){
    this.postagemDoTema = this.postagemService.getPostagens();
  }
 
  

}
