import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import { FeedPostagemComponent } from './feed-postagem/feed-postagem.component';
import { GroupComponent } from './group/group.component';
import { HomeGrupoComponent } from './home-grupo/home-grupo.component';
import { ThemeComponent } from './theme/theme.component';
import { SearchComponent } from './search/search.component';
import { HomeTemaComponent } from './home-tema/home-tema.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
   HomeUsuarioComponent,
    FeedPostagemComponent,
    GroupComponent,
    HomeGrupoComponent,
    ThemeComponent,
    SearchComponent,
    HomeTemaComponent,
    EntrarComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
