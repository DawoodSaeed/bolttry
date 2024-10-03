import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Dashboard</h2>
    <div *ngIf="isDoctor">
      <h3>Patient Reports</h3>
      <canvas id="patientChart"></canvas>
      <h3>Schedule</h3>
      <ul>
        <li *ngFor="let appointment of doctorSchedule">
          {{ appointment.time }} - {{ appointment.patientName }}
        </li>
      </ul>
    </div>
    <div *ngIf="!isDoctor">
      <h3>Your Appointments</h3>
      <ul>
        <li *ngFor="let appointment of patientAppointments">
          {{ appointment.time }} - Dr. {{ appointment.doctorName }}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    canvas {
      max-width: 600px;
      margin: 0 auto;
    }
  `]
})
export class DashboardComponent implements OnInit {
  isDoctor: boolean = true; // TODO: Determine based on user role
  doctorSchedule: any[] = [
    { time: '9:00 AM', patientName: 'John Doe' },
    { time: '10:00 AM', patientName: 'Jane Smith' },
  ];
  patientAppointments: any[] = [
    { time: '2:00 PM', doctorName: 'Dr. Johnson' },
    { time: '3:30 PM', doctorName: 'Dr. Williams' },
  ];

  ngOnInit() {
    if (this.isDoctor) {
      this.createPatientChart();
    }
  }

  createPatientChart() {
    const ctx = document.getElementById('patientChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Blood Pressure', 'Heart Rate', 'Cholesterol'],
        datasets: [{
          label: 'Patient Health Metrics',
          data: [120, 80, 200],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}