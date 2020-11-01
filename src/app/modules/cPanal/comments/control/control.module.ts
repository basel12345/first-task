import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './control.component';
import { CommentsResolver } from 'src/app/shared/resolver/comments.resolver';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { CommentResolver } from 'src/app/shared/resolver/comment.resolver';


const routes: Routes = [
 {
   path: '',
   component: ControlComponent,
   resolve: {
    Comments: CommentsResolver
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
    Comment: CommentResolver
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
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [
    CommentsResolver,
    CommentResolver
  ],
})
export class ControlModule { }
