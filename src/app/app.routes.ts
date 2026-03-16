import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component'; // Siguraduhin na ganito ang path

export const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' }
];