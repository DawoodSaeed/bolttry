import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="onSubmit()">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" [(ngModel)]="email" name="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" [(ngModel)]="password" name="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
    div {
      margin-bottom: 1rem;
    }
  `]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // TODO: Implement actual authentication
    console.log('Login attempt', this.email, this.password);
    this.router.navigate(['/dashboard']);
  }
}