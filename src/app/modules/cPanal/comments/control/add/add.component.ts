import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentsService } from 'src/app/shared/service/comments.service';

@Component({
  selector: 'add-root',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {
  PostReq: FormGroup;
  submitted = false;

 constructor(
   private fb: FormBuilder,
   private service: CommentsService,
   private router: Router
   ) {}
 ngOnInit() {
   this.PostReq = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    body: ['', Validators.required],
   });
 }

 get f() { return this.PostReq.controls; }


 onSubmit() {
    this.submitted = true;
    if (this.PostReq.invalid) {
        return;
    }
   this.service.addComment(this.PostReq.getRawValue()).subscribe(res => {
     console.log(res);
   });
 }

}
