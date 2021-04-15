import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'

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
import { PilaresComponent } from './pilares/pilares.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NavbarPaginaEstaticaComponent } from './navbar-pagina-estatica/navbar-pagina-estatica.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';



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
    CadastrarComponent,
    PilaresComponent,
    SobreNosComponent,
    MenuComponent,
    RodapeComponent,
    NavbarPaginaEstaticaComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot() 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
