import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-registration',
  template: `
    <h2>Doctor Registration</h2>
    <form (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Full Name:</label>
        <input type="text" id="name" [(ngModel)]="name" name="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" [(ngModel)]="email" name="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" [(ngModel)]="password" name="password" required>
      </div>
      <div>
        <label for="license">Medical License Number:</label>
        <input type="text" id="license" [(ngModel)]="license" name="license" required>
      </div>
      <div>
        <label for="specialty">Specialty:</label>
        <input type="text" id="specialty" [(ngModel)]="specialty" name="specialty" required>
      </div>
      <button type="submit">Register</button>
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
export class DoctorRegistrationComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  license: string = '';
  specialty: string = '';

  onSubmit() {
    // TODO: Implement doctor registration and verification logic
    console.log('Doctor registration', {
      name: this.name,
      email: this.email,
      license: this.license,
      specialty: this.specialty
    });
  }
}