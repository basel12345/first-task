import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/shared/service/comments.service';

@Component({
  selector: 'all-root',
  templateUrl: './all.component.html',
})

export class AllComponent implements OnInit {
 Comments: any;
 constructor(private route: ActivatedRoute, private service: CommentsService) {}
 ngOnInit() {
   this.route.data.subscribe(res => {
     this.Comments = res.Comments;
     console.log(this.Comments);

   });
 }

 delete(postId, id) {
  this.service.deleteComment(postId, id).subscribe(res => {
    console.log(res);
    this.service.getAllComments().subscribe(data => {
      this.Comments = data;
    });
  });
 }

}
