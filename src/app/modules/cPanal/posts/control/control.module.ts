import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsResolver } from 'src/app/shared/resolver/post.resolver';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './control.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { OnePostResolver } from 'src/app/shared/resolver/onePost.resolver';


const routes: Routes = [
 {
   path: '',
   component: ControlComponent,
   resolve: {
    Posts: PostsResolver
   }
 },
 {
  path: 'add',
  component: AddComponent
 },
 {
  path: 'edit/:id',
  component: EditComponent,
  resolve: {
    Post: OnePostResolver
   }
 }
];
@NgModule({
  declarations: [
    ControlComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    PostsResolver,
    OnePostResolver
  ]
})
export class ControlModule { }
