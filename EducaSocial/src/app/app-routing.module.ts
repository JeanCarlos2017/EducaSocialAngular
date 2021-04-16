import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FeedPostagemComponent } from './feed-postagem/feed-postagem.component';
import { GroupComponent } from './group/group.component';
import { HomeGrupoComponent } from './home-grupo/home-grupo.component';
import { HomeTemaComponent } from './home-tema/home-tema.component';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import { PilaresComponent } from './pilares/pilares.component';
import { SearchComponent } from './search/search.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/entrar', 
    pathMatch: 'full'
  },
  {
    path: 'entrar',
    component: EntrarComponent
  },
  
  {
    path: 'cadastre-se',
    component: CadastrarComponent
  },

  {
    path: 'sobre-nos',
    component: SobreNosComponent
  },

  {
    path: 'pilares',
    component: PilaresComponent
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
  },
  {
    path: 'grupo-home/posts',
    component: FeedPostagemComponent
  },
  {
    path:'cadastrar',
    component: CadastrarComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
