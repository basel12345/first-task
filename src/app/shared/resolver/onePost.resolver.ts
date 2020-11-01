import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PostsService } from '../service/posts.service';

@Injectable()
export class OnePostResolver implements Resolve<any> {
  constructor(private service: PostsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.service.getPostById(route.params.id);
  }
}
