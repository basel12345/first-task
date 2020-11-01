import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsResolver } from 'src/app/shared/resolver/post.resolver';
import { AllComponent } from './all.component';


const routes: Routes = [
 {
   path: '',
   component: AllComponent,
   resolve: {
    Posts: PostsResolver
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
  providers: [
    PostsResolver
  ],
})
export class AllPostsModule { }
