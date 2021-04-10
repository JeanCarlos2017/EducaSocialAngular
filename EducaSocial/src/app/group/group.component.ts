import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Grupo } from '../models/Grupo';
import { Postagem } from '../models/Postagem';
import { User } from '../models/user';
import { AuthService } from '../service/auth.service';
import { GrupoService } from '../service/grupo.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(private grupoService: GrupoService, 
              private authService: AuthService, 
              private router: Router, 
              private postagemService: PostagemService) { }
  
  //listage de grupo participante e grupo criado
  userId: number;
  user: User= new User();
  grupoParticipante: Grupo[];
  grupoCriadoPorVoce: Grupo[];

  ngOnInit(): void {
    window.scroll(0,0);
    this.buscaUsuarioPorId();
  }

  buscaUsuarioPorId(){
    this.userId= environment.id;
    this.authService.buscaUsuarioPorId(this.userId).subscribe( (resp: User)=>{
      this.user= resp;
      this.grupoParticipante= this.user.gruposUsuarioParticipa;
      this.grupoCriadoPorVoce= this.user.gruposCriadoPeloUsuario;
      
    });
  }

  entrar(grupo: Grupo){
    this.grupoService.buscaPostagemDoGrupo(grupo.id_grupo).subscribe( (resp: Postagem[])=>{
      //defindindo as postagens do grupo 
      this.postagemService.setPostagens(resp);
      //definindo as variáveis de ambiente 
      environment.idGrupo= grupo.id_grupo;
      environment.descricaoGrupo= grupo.descricao;
      environment.fotoCapaGrupo= grupo.fotoCapa;
      environment.fotoPerfilGrupo= grupo.fotoPerfil;
      environment.nome= grupo.nome;
    
      this.router.navigate(['/grupo-home/posts']);
    })
  }
}
