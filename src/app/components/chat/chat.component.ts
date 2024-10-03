import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  template: `
    <h2>Chat</h2>
    <div class="chat-container">
      <div class="messages">
        <div *ngFor="let message of messages" [ngClass]="{'sent': message.sent, 'received': !message.sent}">
          {{ message.text }}
        </div>
      </div>
      <form (ngSubmit)="sendMessage()">
        <input type="text" [(ngModel)]="newMessage" name="newMessage" placeholder="Type a message..." required>
        <button type="submit">Send</button>
      </form>
    </div>
  `,
  styles: [`
    .chat-container {
      max-width: 500px;
      margin: 0 auto;
      border: 1px solid #ccc;
      padding: 1rem;
    }
    .messages {
      height: 300px;
      overflow-y: auto;
      margin-bottom: 1rem;
    }
    .sent, .received {
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      border-radius: 5px;
    }
    .sent {
      background-color: #dcf8c6;
      text-align: right;
    }
    .received {
      background-color: #f1f0f0;
    }
    form {
      display: flex;
    }
    input {
      flex-grow: 1;
      margin-right: 0.5rem;
    }
  `]
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  newMessage: string = '';

  ngOnInit() {
    // TODO: Implement real-time chat using Socket.io
    this.messages = [
      { text: 'Hello, how can I help you?', sent: false },
      { text: 'I have a question about my prescription.', sent: true },
    ];
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, sent: true });
      this.newMessage = '';
      // TODO: Send message to server
    }
  }
}