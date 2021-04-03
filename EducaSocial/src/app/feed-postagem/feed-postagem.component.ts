import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-postagem',
  templateUrl: './feed-postagem.component.html',
  styleUrls: ['./feed-postagem.component.css']
})
export class FeedPostagemComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
