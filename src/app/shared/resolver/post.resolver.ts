import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '../service/posts.service';

@Injectable()
export class PostsResolver implements Resolve<any> {
  constructor(private service: PostsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.service.getAllPosts();
  }
}
