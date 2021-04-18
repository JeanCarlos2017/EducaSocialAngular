import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { AlertasService } from '../service/alertas.service';
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
    private title: Title,
    private alertas: AlertasService
    ) { }

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
        this.user= new User();
        this.router.navigate(['/entrar']);
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso');
      });
    }else{
      this.alertas.showAlertDanger('As senhas não correspondem')
    }
  }
}
