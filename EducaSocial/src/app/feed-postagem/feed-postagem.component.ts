import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../models/Postagem';
import { User } from '../models/user';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-feed-postagem',
  templateUrl: './feed-postagem.component.html',
  styleUrls: ['./feed-postagem.component.css']
})
export class FeedPostagemComponent implements OnInit {

  constructor(public router: Router, 
             private postagemService: PostagemService) { }

  postagemDoTema: Postagem[];
  userDesconhecido: User;

  ngOnInit() {
    if(environment.token === ''){
      this.router.navigate(['/entrar']);
    }
    this.postagemDoTema= this.postagemService.getPostagens();
    this.parsePostagem();
    
  }

  
 parsePostagem(){
   this.postagemDoTema.map( (post: Postagem) =>{
     if(post.usuario === null){
       post.usuario= new User();
       post.usuario.nome= "Desconhecido";
       post.usuario.url_foto= "https://i.imgur.com/i3cXlrq.png";
     }
     if(post.usuario.url_foto === null){
       post.usuario.url_foto= "https://i.imgur.com/i3cXlrq.png";
     }

   })
 }

 
  
}
