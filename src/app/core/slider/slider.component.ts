import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider-root',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css'],
})
export class SliderComponent implements OnInit {
 hidden = false;
 constructor() {}
 ngOnInit() {}

 toggleBadgeVisibility() {
   this.hidden = !this.hidden;
 }
}
