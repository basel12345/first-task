import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'control-root',
  templateUrl: './control.component.html',
})

export class ControlComponent implements OnInit {
  Posts: any;
 constructor(
  private route: ActivatedRoute,
  private router: Router
  ) {}
 ngOnInit() {
  this.route.data.subscribe(res => {
    this.Posts = res['Posts'];
   });
 }

 formEdit(id) {
   this.router.navigate([`./edit/${id}`]);
 }

}
