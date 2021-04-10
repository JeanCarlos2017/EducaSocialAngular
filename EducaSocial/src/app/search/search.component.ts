import { Component, OnInit } from '@angular/core';
import { Grupo } from '../models/Grupo';
import { Tema } from '../models/Tema';
import { GrupoService } from '../service/grupo.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private temaService: TemaService, 
              private grupoService: GrupoService) { }

  //listagem de tema 
  temaPesquisado: Tema[];
  descricaoTema: string= '';
  //listagem de grupo
  grupoPesquisado: Grupo[];
  descricaoGrupo: string= '';

  ngOnInit(): void {
    window.scroll(0,0);
    this.buscaTema();
    this.buscaGrupo();
  }

  buscaTema() {
    if (this.descricaoTema === '') {
      this.temaService.getAllTema().subscribe((resp: Tema[]) => {
        this.temaPesquisado = resp;
      })
    } else {
      this.temaService.buscaTemaPorDescricao(this.descricaoTema).subscribe((resp: Tema[]) => {
        this.temaPesquisado = resp;
      })
    }
  }

  entrarTema(idTema: number, descricao: string){

  }

  buscaGrupo(){
    if (this.descricaoGrupo === '') {
      this.grupoService.listarGrupo().subscribe( (resp: Grupo[])=>{
        this.grupoPesquisado= resp;
      })
    }else{
      this.grupoService.buscarGrupoPorNome(this.descricaoGrupo).subscribe( (resp: Grupo[])=>{
        this.grupoPesquisado= resp;
      })
    }

  }

  entrarGrupo(){

  }
}
