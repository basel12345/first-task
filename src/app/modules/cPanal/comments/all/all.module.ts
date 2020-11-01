import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsResolver } from 'src/app/shared/resolver/comments.resolver';
import { AllComponent } from './all.component';


const routes: Routes = [
 {
   path: '',
   component: AllComponent,
   resolve: {
    Comments: CommentsResolver
   }
 }
];
@NgModule({
  declarations: [
    AllComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [CommentsResolver],
})
export class AllCommentsModule { }
