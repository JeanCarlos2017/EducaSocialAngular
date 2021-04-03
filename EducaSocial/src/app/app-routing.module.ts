import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPostagemComponent } from './feed-postagem/feed-postagem.component';
import { GroupComponent } from './group/group.component';
import { HomeGrupoComponent } from './home-grupo/home-grupo.component';
import { HomeTemaComponent } from './home-tema/home-tema.component';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import { SearchComponent } from './search/search.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home-usuario/posts', 
    pathMatch: 'full'
  },
  {
    'path': 'home-usuario/posts',
    component: FeedPostagemComponent
  }, 
  {
    'path': 'home-usuario/grupo-usuario',
    component: GroupComponent
  },
  {
    'path': 'grupo-home',
    component: HomeGrupoComponent
  },
  {
    path:'home-usuario/tema', 
    component: ThemeComponent
  },
  {
    path:'home-usuario/pesquisa', 
    component: SearchComponent
  }, 
  {
    path:"home-usuario/tema/postagens",
    component: HomeTemaComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
