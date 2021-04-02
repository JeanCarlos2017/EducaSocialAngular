import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPostagemComponent } from './feed-postagem/feed-postagem.component';
import { GroupComponent } from './group/group.component';
import { HomeGrupoComponent } from './home-grupo/home-grupo.component';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home-usuario', 
    pathMatch: 'full'
  },
  {
    path: 'home-usuario',
    component: HomeUsuarioComponent
  },
  {
    'path': 'posts',
    component: FeedPostagemComponent
  }, 
  {
    'path': 'grupo-usuario',
    component: GroupComponent
  },
  {
    'path': 'grupo-home',
    component: HomeGrupoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
