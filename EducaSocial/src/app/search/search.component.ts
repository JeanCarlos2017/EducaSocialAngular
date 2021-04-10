import { Component, OnInit } from '@angular/core';
import { Tema } from '../models/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private temaService: TemaService) { }

  //listagem de tema 
  temaPesquisado: Tema[];
  descricaoTema: string= '';

  ngOnInit(): void {
    window.scroll(0,0);
    this.buscaTema();
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
}
