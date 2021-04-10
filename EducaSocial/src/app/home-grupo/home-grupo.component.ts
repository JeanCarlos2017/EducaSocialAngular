import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home-grupo',
  templateUrl: './home-grupo.component.html',
  styleUrls: ['./home-grupo.component.css']
})
export class HomeGrupoComponent implements OnInit {

  constructor(public router: Router) { }

  //informações do grupo
  nome: string= environment.nomeGrupo;
  descricao: string= environment.descricaoGrupo;
  fotoPerfil: string= environment.fotoPerfilGrupo;
  fotoCapa: string= environment.fotoCapaGrupo;

  ngOnInit(): void {
    window.scroll(0,0);
  }


}
