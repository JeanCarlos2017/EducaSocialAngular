import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Grupo } from '../models/Grupo';
import { User } from '../models/user';
import { AuthService } from '../service/auth.service';
import { GrupoService } from '../service/grupo.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(private grupoService: GrupoService, 
              private authService: AuthService) { }
  
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


}
