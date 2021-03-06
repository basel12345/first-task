import { Component, DoCheck } from '@angular/core';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  user: any;
  title = 'socialMedia';
  constructor(public authService: AuthService) {}

  ngDoCheck() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  logout() {
    localStorage.clear();
  }

}
