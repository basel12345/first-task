import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'comments', pathMatch: 'full' },
  {
    path: 'comments',
    loadChildren: () => import('./comments/comments.module').then((m) => m.CommentsModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then((m) => m.PostsModule),
  },
  { path: '**', redirectTo: 'comments' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpanalRoutingModule { }
