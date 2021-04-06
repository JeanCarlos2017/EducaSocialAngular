import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../models/userLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  constructor(private router: Router, 
              private authService: AuthService, 
              private title: Title) { }

  userLogin: UserLogin= new UserLogin();

  ngOnInit(): void {
    window.scroll(0,0);
    this.title.setTitle("Entre na EducaSocial");
  }

  entrar(){
    this.authService.entrar(this.userLogin).subscribe( (resp: UserLogin) =>{
        this.userLogin= resp;

        //pegando as variáveis e deixando-as global 
        environment.id= this.userLogin.id;
        environment.nome= this.userLogin.nome;
        environment.foto= this.userLogin.url_foto;
        environment.codigo_usuario= this.userLogin.codigo_usuario;
        environment.token= this.userLogin.token;
        
        //informo o usuário e o redireciono
        this.router.navigate(['/home-usuario/posts']);
        alert('usuario logado com sucesso!');

    }, erro =>{
      if(erro.status == 404){
        alert(erro.error.titulo)
      }
    });
  }
  
}
