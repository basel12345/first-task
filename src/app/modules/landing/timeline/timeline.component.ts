import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'landing-root',
  templateUrl: './timeline.component.html',
})
export class TimelineComponent implements OnInit {
  Posts: any;
 constructor(private route: ActivatedRoute) {}
 ngOnInit() {
  this.route.data.subscribe(res => {
    this.Posts = res['Posts'];
    console.log(res)
   });
 }

}
