import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostsService {
  // DITO SA LOOB NG CLASS DAPAT ANG POSTS
  private posts: any[] = [
    { title: 'James Acero', description: 'Sample description 1' },
    { title: 'James Acero', description: 'Sample description 2' },
    { title: 'James Acero', description: 'Sample description 3' }
  ];

  getPosts() {
    return this.posts;
  }

  addPost(title: string, description: string) {
    this.posts.push({ title, description });
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
  }
}