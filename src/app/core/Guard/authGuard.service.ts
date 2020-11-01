import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { LocalStorageService } from "../Storage/localStorage.service";

@Injectable()
export class GuardService implements CanActivate {
  constructor(public service: LocalStorageService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (!token) {
      this.router.navigate(["landing"]);
      return false;
    }
    return true;
  }
}
