import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  private postsService = inject(PostsService);
  
  newTitle: string = '';
  newDescription: string = '';

  get posts() { 
    return this.postsService.getPosts(); 
  }

  addPost() {
    this.postsService.addPost(this.newTitle, this.newDescription);
    this.newTitle = '';
    this.newDescription = '';
  }

  deletePost(index: number) {
    this.postsService.deletePost(index);
  }
}