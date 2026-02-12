import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbox.html',      // ← Just chatbox.html
  styleUrls: ['./chatbox.css']        // ← Just chatbox.css
})
export class Chatbox {                // ← Class name is just "Chatbox"
  isOpen = false;
  userInput = '';
  messages: Message[] = [];
  isTyping = false;

  constructor(private router: Router) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.messages.length === 0) {
      this.addBotMessage('👋 Hello Dixant! How can I help you today?');
    }
  }

  sendMessage() {
    const msg = this.userInput.trim().toLowerCase();
    if (!msg) return;

    this.messages.push({ role: 'user', text: this.userInput });
    this.userInput = '';
    this.isTyping = true;

    setTimeout(() => {
      this.handleUserInput(msg);
      this.isTyping = false;
    }, 800);
  }

  handleUserInput(input: string) {
    if (this.isGreeting(input)) {
      this.addBotMessage('Hello Dixant! How can I help you? 😊');
      return;
    }

    if (input.includes('open') || input.includes('go to') || input.includes('show')) {
      this.handleNavigation(input);
      return;
    }

    this.addBotMessage('I can help you navigate! Try saying "open dashboard" or "open income" 💡');
  }

  isGreeting(input: string): boolean {
    const greetings = ['hello', 'hi', 'hey', 'hii', 'hola', 'greetings'];
    return greetings.some(greeting => input.includes(greeting));
  }

  handleNavigation(input: string) {
    const routes: { [key: string]: string } = {
      'dashboard': '/dashboard',
      'login': '/login',
      'expense': '/expense',
      'income': '/income',
      'todo': '/todo'
    };

    for (const [key, route] of Object.entries(routes)) {
      if (input.includes(key)) {
        this.addBotMessage(`✅ Opening ${key.charAt(0).toUpperCase() + key.slice(1)} for you!`);
        setTimeout(() => {
          this.router.navigate([route]);
        }, 600);
        return;
      }
    }

    this.addBotMessage('❌ Sorry, I couldn\'t find that page. Try: dashboard, income, expense, todo, or login.');
  }

  addBotMessage(text: string) {
    this.messages.push({ role: 'bot', text });
  }

  onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter' && !this.isTyping) {
      this.sendMessage();
    }
  }
}