import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, PostsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { }