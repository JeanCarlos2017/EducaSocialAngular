import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-entrar-cadastro',
  templateUrl: './entrar-cadastro.component.html',
  styleUrls: ['./entrar-cadastro.component.css']
})
export class EntrarCadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#signin").click(function () {
      $("body").attr('class', 'sign-in-js')
    }
    );

    $("#signup").click(function () {
      $("body").attr('class', 'sign-up-js')
    }
    );
  }

}
