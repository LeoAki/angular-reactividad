import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private messageSubject = new Subject<string>();
  constructor() { }

  getMessages() {
    return this.messageSubject.asObservable();
  }

  sendMessage(message: string) {
    this.messageSubject.next(message);
  }

  logic() {
    this.sendMessage('mensaje 1');
    this.sendMessage('mensaje 2');
    this.sendMessage('mensaje 3');
    this.sendMessage('mensaje 4');
    const subject1 = this.getMessages();
    subject1.subscribe(x => {
      console.log('subject1: ' , x);
    })
    this.sendMessage('mensaje 5');
    this.sendMessage('mensaje 6');
    const subject2 = this.getMessages();
    subject2.subscribe(x => {
      console.log('subject2: ' , x);
    })
    this.sendMessage('mensaje 7');
    this.sendMessage('mensaje 8');
    this.sendMessage('mensaje 9');
    this.sendMessage('mensaje 10');

  }
}
