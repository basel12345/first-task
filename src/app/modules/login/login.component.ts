import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-root',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
Login: FormGroup;
submitted = false;

 constructor(
  private fb: FormBuilder,
 ) {}
 ngOnInit() {
  this.Login = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
 }

 get f() { return this.Login.controls; }

 onSubmit() {
  this.submitted = true;
  if (this.Login.invalid) {
      return;
  }
   console.log(this.Login);
}
}
