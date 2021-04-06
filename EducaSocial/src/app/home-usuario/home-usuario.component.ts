import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent implements OnInit {
 
  url_foto:string;
  codigo_usuario: number;
  nome_usuario: string;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.url_foto= environment.foto;
    this.codigo_usuario= environment.codigo_usuario;
    this.nome_usuario= environment.nome;
  }

}
