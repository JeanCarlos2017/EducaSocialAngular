import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Comentario } from '../models/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private httpClient: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  id_usuario: number = environment.id;

  postComentario(comment: Comentario, id_postagem: number): Observable<Comentario> {
    return this.httpClient.post<Comentario>(`http://localhost:8080/usuario/${this.id_usuario}/postagem/${id_postagem}/comentarios/cadastrar`, comment, this.token);
  }
}
