import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPostagemComponent } from './feed-postagem/feed-postagem.component';

const routes: Routes = [
  {
    'path': 'posts',
    component: FeedPostagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
