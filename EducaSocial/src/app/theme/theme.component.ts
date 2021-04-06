import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../models/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  tema: Tema= new Tema();
  listaTemas: Tema[];

  constructor(private temaService: TemaService, 
              private title: Title,
              private router: Router) { }

 ngOnInit(): void {
  window.scroll(0,0);
    this.title.setTitle("Tema disponíveis no EducaSocial");
    if(environment.token == ''){
      this.router.navigate(['/entrar']);
    }
    this.findAllTema();
    
  }

  findAllTema(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listaTemas= resp;
    })
  }

  cadastrarTema(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema= resp;
      alert("Tema cadastrado com sucesso! ");
      this.tema= new Tema();
      this.findAllTema(); //atualizo a lista de temas 
    })
  }
}
