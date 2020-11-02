import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'navbar-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {
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
