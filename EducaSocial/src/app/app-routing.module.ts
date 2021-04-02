import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPostagemComponent } from './feed-postagem/feed-postagem.component';
import { GroupComponent } from './group/group.component';

const routes: Routes = [
  {
    'path': 'posts',
    component: FeedPostagemComponent
  }, 
  {
    'path': 'grupo-usuario',
    component: GroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
