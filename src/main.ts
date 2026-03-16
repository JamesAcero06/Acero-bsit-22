import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // Siguraduhing tumuturo sa tamang file

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));