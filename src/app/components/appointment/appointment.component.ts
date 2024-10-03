import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  template: `
    <h2>Book an Appointment</h2>
    <form (ngSubmit)="onSubmit()">
      <div>
        <label for="doctor">Select Doctor:</label>
        <select id="doctor" [(ngModel)]="selectedDoctor" name="doctor" required>
          <option *ngFor="let doctor of doctors" [value]="doctor.id">{{ doctor.name }}</option>
        </select>
      </div>
      <div>
        <label for="date">Date:</label>
        <input type="date" id="date" [(ngModel)]="appointmentDate" name="date" required>
      </div>
      <div>
        <label for="time">Time:</label>
        <input type="time" id="time" [(ngModel)]="appointmentTime" name="time" required>
      </div>
      <button type="submit">Book Appointment</button>
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
export class AppointmentComponent {
  doctors = [
    { id: 1, name: 'Dr. Johnson' },
    { id: 2, name: 'Dr. Williams' },
    { id: 3, name: 'Dr. Davis' }
  ];
  selectedDoctor: number | null = null;
  appointmentDate: string = '';
  appointmentTime: string = '';

  onSubmit() {
    // TODO: Implement appointment booking logic
    console.log('Appointment booked', {
      doctor: this.selectedDoctor,
      date: this.appointmentDate,
      time: this.appointmentTime
    });
  }
}