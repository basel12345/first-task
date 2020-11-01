import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/shared/service/posts.service';

@Component({
  selector: 'edit-root',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  PutReq: FormGroup;
  submitted = false;
  id: any;

 constructor(
   private fb: FormBuilder,
   private service: PostsService,
   private route: ActivatedRoute
   ) {}
 ngOnInit() {
   this.PutReq = this.fb.group({
     body: ['', Validators.required],
     title: ['', Validators.required],
   });
   this.route.data.subscribe(res => {
    this.PutReq.patchValue(res.Post);
   });
   this.route.params.subscribe(res => {
    this.id = res.id;
   });
 }

 get f() { return this.PutReq.controls; }


 onSubmit() {
    this.submitted = true;
    if (this.PutReq.invalid) {
        return;
    }
   this.service.editPost(this.PutReq.getRawValue(), this.id).subscribe(res => {
     console.log(res);
   });
 }

}
