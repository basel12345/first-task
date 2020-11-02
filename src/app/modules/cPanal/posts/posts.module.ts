import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsRoutingModule } from './posts-routing.component';
import { PostComponent } from './posts.component';

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class PostsModule { }
