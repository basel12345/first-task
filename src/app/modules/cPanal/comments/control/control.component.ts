import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'control-root',
  templateUrl: './control.component.html',
})

export class ControlComponent implements OnInit {
  Comments: any;
  constructor(private route: ActivatedRoute) {}
 ngOnInit() {
  this.route.data.subscribe(res => {
    this.Comments = res.Comments;
    console.log(this.Comments);

  });
 }

}
