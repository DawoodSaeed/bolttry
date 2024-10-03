import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/login">Login</a>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/appointment">Appointments</a>
      <a routerLink="/chat">Chat</a>
      <a routerLink="/doctor-registration">Doctor Registration</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      background-color: #f8f9fa;
      padding: 1rem;
    }
    nav a {
      margin-right: 1rem;
      text-decoration: none;
      color: #007bff;
    }
  `]
})
export class AppComponent {
  title = 'Health Care Dashboard';
}