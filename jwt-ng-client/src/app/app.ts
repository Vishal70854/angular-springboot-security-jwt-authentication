import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Security } from './security/security';

@Component({
  selector: 'app-root',
  imports: [Security],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jwt-ng-client');
}
