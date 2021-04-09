import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../models/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private httpClient: HttpClient) { }

  token= {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  
  id_usuario: number= environment.id;

  postagensAtual: Postagem[];

  getPostagens(){
    return this.postagensAtual;
  }

  setPostagens(postagens: Postagem[]){
    this.postagensAtual= postagens;
  }

  postPostagem(post: Postagem ): Observable<Postagem>{
    return this.httpClient.post<Postagem>(`http://localhost:8080/usuario/${this.id_usuario}/postagem/cadastrar`, post, this.token);
  }
}
