import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/shared/service/posts.service';

@Component({
  selector: 'add-root',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {
  PostReq: FormGroup;
  submitted = false;

 constructor(
   private fb: FormBuilder,
   private service: PostsService,
   private router: Router
   ) {}
 ngOnInit() {
   this.PostReq = this.fb.group({
     body: ['', Validators.required],
     title: ['', Validators.required],
   });
 }

 get f() { return this.PostReq.controls; }


 onSubmit() {
    this.submitted = true;
    if (this.PostReq.invalid) {
        return;
    }
   this.service.addPost(this.PostReq.getRawValue()).subscribe(res => {
     console.log(res);
   });
 }

}
