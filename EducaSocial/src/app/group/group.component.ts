import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Grupo } from '../models/Grupo';
import { Postagem } from '../models/Postagem';
import { User } from '../models/User';
import { AlertasService } from '../service/alertas.service';
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
              private postagemService: PostagemService,
              private alertas: AlertasService) { }
  
  //listage de grupo participante e grupo criado
  userId: number;
  user: User= new User();
  grupoParticipante: Grupo[];
  grupoCriadoPorVoce: Grupo[];
  novoGrupo: Grupo = new Grupo();

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
    //definindo as variáveis de ambiente 
    environment.idGrupo= grupo.id_grupo;
    this.grupoService.buscaPostagemDoGrupo(grupo.id_grupo).subscribe( (resp: Postagem[])=>{
      //defindindo as postagens do grupo 
      this.postagemService.setPostagens(resp);
      this.router.navigate(['/grupo-home/posts']);
    })
  }

  //cadastro de um novo grupo 
  criarGrupo(){
    this.grupoService.criaGrupo(this.novoGrupo).subscribe( (resp: Grupo)=>{
      this.alertas.showAlertSuccess("Grupo criado com sucesso, boa sortee!");
      this.grupoCriadoPorVoce.push(resp);
    })
  }
  

}
