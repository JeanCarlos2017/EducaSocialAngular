import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarCadastroComponent } from './entrar-cadastro/entrar-cadastro.component';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import { FeedPostagemComponent } from './feed-postagem/feed-postagem.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrarCadastroComponent,
    HomeUsuarioComponent,
    FeedPostagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
