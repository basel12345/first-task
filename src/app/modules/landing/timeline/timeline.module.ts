import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './timeline.component';
import { PostsResolver } from 'src/app/shared/resolver/post.resolver';

const routes: Routes = [
  {
    path: '',
    component: TimelineComponent,
    resolve: {
      Posts: PostsResolver
    }
  }
];
@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [PostsResolver],
})
export class TimelineModule { }
