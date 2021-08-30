import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title(title: 'WhatsApp - Clonning') {
    throw new Error('Method not implemented.');
  }
  conversation: any;

  onConversationSelected(conversation: any) {
    this.conversation = conversation;
  }
}
