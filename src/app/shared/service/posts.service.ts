import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class PostsService {
  constructor(private http: HttpClient) {
  }

  getAllPosts() {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

  getPostById(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  addPost(Post) {
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, Post);
  }

  editPost(Post, id) {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, Post);
  }

  deletePost(id) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
