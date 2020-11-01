import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentsService } from 'src/app/shared/service/comments.service';

@Component({
  selector: 'edit-root',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  PutReq: FormGroup;
  submitted = false;
  id: any;
  postId: any;

 constructor(
   private fb: FormBuilder,
   private service: CommentsService,
   private route: ActivatedRoute
   ) {}
 ngOnInit() {
   this.PutReq = this.fb.group({
     name: ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     body: ['', Validators.required],
   });
   this.route.data.subscribe(res => {
    this.PutReq.patchValue(res.Comment);
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
   this.service.editComment(this.id, this.PutReq.getRawValue()).subscribe(res => {
     console.log(res);
   });
 }

}
