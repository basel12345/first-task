import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments.component';
import { CommentsRoutingModule } from './comments-routing.module';

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ],
  providers: [],
})
export class CommentsModule { }
