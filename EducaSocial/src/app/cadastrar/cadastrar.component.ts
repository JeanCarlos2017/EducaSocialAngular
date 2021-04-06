import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  user: User= new User();
  confirmarSenha: string;

  constructor(private router: Router, 
    private authService: AuthService, 
    private title: Title) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.title.setTitle("Cadastre-se no EducaSocial");
  }

  confirmPassword(event: any){
    this.confirmarSenha= event.target.value;  
  }
  
  cadastrar(){
    if(this.user.senha == this.confirmarSenha){
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user= resp;
        this.router.navigate(['/entrar']);
        alert('Usuário cadastrado com sucesso');
      });
    }else{
      alert('As senhas não correspondem')
    }
  }
}
