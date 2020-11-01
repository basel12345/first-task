import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/shared/service/posts.service';

@Component({
  selector: 'all-root',
  templateUrl: './all.component.html',
})

export class AllComponent implements OnInit {
  Posts: any;
 constructor(
   private route: ActivatedRoute,
   private service: PostsService
  ) {}
 ngOnInit() {
   this.route.data.subscribe(res => {
    this.Posts = res['Posts'];
   });
 }

 delete(id) {
  this.service.deletePost(id).subscribe(res => {
    alert('ok');
    this.service.getAllPosts().subscribe(data => {
      this.Posts = data;
    });
  });
 }

}
