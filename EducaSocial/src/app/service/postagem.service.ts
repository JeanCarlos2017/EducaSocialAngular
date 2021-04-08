import { Injectable } from '@angular/core';
import { Postagem } from '../models/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor() { }

  postagensAtual: Postagem[];

  getPostagens(){
    return this.postagensAtual;
  }

  setPostagens(postagens: Postagem[]){
    this.postagensAtual= postagens;
  }
}
