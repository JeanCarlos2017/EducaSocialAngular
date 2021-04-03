import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-grupo',
  templateUrl: './home-grupo.component.html',
  styleUrls: ['./home-grupo.component.css']
})
export class HomeGrupoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
