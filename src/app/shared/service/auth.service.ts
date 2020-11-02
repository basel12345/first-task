import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import { LocalStorageService } from 'src/app/core/Storage/localStorage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    public service: LocalStorageService,
  ) { }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.default.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
      this.service.setUser(result.user);
      console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error);
        alert(error)
    });
  }

}
