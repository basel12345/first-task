import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CommentsService {
  constructor(private http: HttpClient) {
  }

  getAllComments() {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`);
  }

  CommentById(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }

  addComment(Comment) {
    return this.http.post(`https://jsonplaceholder.typicode.com/comments`, Comment);
  }

  editComment(id, Comment) {
    return this.http.put(`https://jsonplaceholder.typicode.com/comments/${id}`, Comment);
  }

  deleteComment(postId, id) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }
}
