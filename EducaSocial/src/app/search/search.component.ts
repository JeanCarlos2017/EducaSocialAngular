import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Grupo } from '../models/Grupo';
import { Postagem } from '../models/Postagem';
import { Tema } from '../models/Tema';
import { GrupoService } from '../service/grupo.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private temaService: TemaService, 
              private grupoService: GrupoService, 
              private postagemService: PostagemService, 
              private router: Router) { }

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
    this.temaService.buscaPostagensDoTema(idTema).subscribe( (resp: Postagem[]) =>{
      this.postagemService.setPostagens(resp);
      environment.descricaoTema= descricao;
      environment.idTema= idTema;
      this.router.navigate(['/home-usuario/tema/postagens']);
    });
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

  entrarGrupo(grupo: Grupo){
    //definindo as variáveis de ambiente 
    environment.idGrupo= grupo.id_grupo;
    console.log(grupo.id_grupo)
    this.grupoService.buscaPostagemDoGrupo(grupo.id_grupo).subscribe( (resp: Postagem[])=>{
      //defindindo as postagens do grupo 
      console.log(resp)
      this.postagemService.setPostagens(resp);
      this.router.navigate(['/grupo-home/posts']);
    })
  }
}
