import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CommentsService } from '../service/comments.service';

@Injectable()
export class CommentResolver implements Resolve<any> {
  constructor(private service: CommentsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    console.log(route);
    return this.service.CommentById(route.params.id);
  }
}
