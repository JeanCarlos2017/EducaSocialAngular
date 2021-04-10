import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Grupo } from '../models/Grupo';
import { GrupoService } from '../service/grupo.service';

@Component({
  selector: 'app-home-grupo',
  templateUrl: './home-grupo.component.html',
  styleUrls: ['./home-grupo.component.css']
})
export class HomeGrupoComponent implements OnInit {

  constructor(public router: Router,
    private grupoService: GrupoService) { }

  //informações do grupo
  idGrupo: number = environment.idGrupo;
  nome: string
  descricao: string;
  fotoPerfil: string;
  fotoCapa: string;

  ngOnInit(): void {
    window.scroll(0, 0);
    this.buscaGrupo();
  }

  buscaGrupo() {
    this.idGrupo= environment.idGrupo;
    this.grupoService.buscarGrupoPorId(this.idGrupo).subscribe((resp: Grupo) => {
      this.nome = resp.nome;
      this.descricao = resp.descricao;
      this.fotoPerfil = resp.fotoPerfil;
      this.fotoCapa = resp.fotoCapa;
    })
  }

}
