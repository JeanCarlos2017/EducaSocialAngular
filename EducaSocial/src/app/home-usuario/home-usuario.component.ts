import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent implements OnInit {
 
  url_foto:string;
  codigo_usuario: number;
  nome_usuario: string;
  constructor( public router: Router, 
            private authService: AuthService, 
             private title: Title) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.title.setTitle("Bem vindo ao EducaSocial");

    //ambiente de procudação
    this.url_foto= environment.foto;
    this.codigo_usuario= environment.codigo_usuario;
    this.nome_usuario= environment.nome;

    if(!this.authService.logado()){
      this.router.navigate(['/entrar']);
    }
  }

}
