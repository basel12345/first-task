import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  {
    path: 'all',
    loadChildren: () => import('./all/all.module').then((m) => m.AllCommentsModule),
  },
  {
    path: 'control',
    loadChildren: () => import('./control/control.module').then((m) => m.ControlModule),
  },
  { path: '**', redirectTo: 'all' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
