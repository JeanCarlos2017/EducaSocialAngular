import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Grupo } from '../models/Grupo';
import { Postagem } from '../models/Postagem';
import { PostagemService } from './postagem.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private httpClient: HttpClient) { }
  
  token= {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  idUser: number= environment.id;

  listarGrupo(): Observable<Grupo[]>{
    return this.httpClient.get<Grupo[]>(`http://localhost:8080/usuario/${this.idUser}/grupo/listar`, this.token);
  }

  buscarGrupoPorNome(descricao: string): Observable<Grupo[]>{
    return this.httpClient.get<Grupo[]>(`http://localhost:8080/usuario/${this.idUser}/grupo/busca/${descricao}`, this.token);
  }

  buscaPostagemDoGrupo(id_grupo: number):Observable<Postagem[]>{
   return this.httpClient.get<Postagem[]>(`http://localhost:8080/usuario/${this.idUser}/grupo/${id_grupo}/listar/postagem`, this.token);
  }
}
