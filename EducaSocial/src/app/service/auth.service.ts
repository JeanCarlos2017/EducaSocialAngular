import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/userLogin';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/usuario/cadastrar', user);
  }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuario/login', userLogin);
  }

  logado(){
    let ok: boolean = false;

    if(environment.token != ''){
      ok= true;
    }
    return ok;
  }
}
