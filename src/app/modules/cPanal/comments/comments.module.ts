import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { CommentsComponent } from './comments.component';
import { CommentsRoutingModule } from './comments-routing.module';

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CoreModule,
    CommentsRoutingModule
  ],
  providers: [],
})
export class CommentsModule { }
