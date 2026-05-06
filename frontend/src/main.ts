import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { API_URL } from './app/services/api.token';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    { provide: API_URL, useValue: 'http://localhost:3001/api' }
  ]
});
