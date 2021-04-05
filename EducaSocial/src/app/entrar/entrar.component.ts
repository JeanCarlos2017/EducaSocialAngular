import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  entrar(){
    this.router.navigate(['/home-usuario/posts']);
  }
}
