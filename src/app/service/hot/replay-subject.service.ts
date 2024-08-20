import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplaySubjectService {

  private chatSubject = new ReplaySubject<string>(10);
  getChatHistory() {
    return this.chatSubject.asObservable();
  }
  sendMessage(message: string) {
    this.chatSubject.next(message);
  }

  logic() {
    this.sendMessage('mensaje 1');
    this.sendMessage('mensaje 2');
    this.sendMessage('mensaje 3');
    this.sendMessage('mensaje 4');
    this.sendMessage('mensaje 5');
    this.sendMessage('mensaje 6');
    this.sendMessage('mensaje 7');
    this.sendMessage('mensaje 8');
    this.sendMessage('mensaje 9');
    this.sendMessage('mensaje 10');
    let msg1Observer = this.getChatHistory();
    msg1Observer.subscribe((c => {
      console.log('valores de msg1Observer:', c);
    }));
    this.sendMessage('mensaje 11');
    this.sendMessage('mensaje 12');
    let msg2Observer = this.getChatHistory();
    msg2Observer.subscribe((c => {
      console.log('valores de msg2Observer:', c);
    }));
    this.sendMessage('mensaje 13');
    this.sendMessage('mensaje 14');
    this.sendMessage('mensaje 15');
    this.sendMessage('mensaje 16');
    let msg3Observer = this.getChatHistory();
    msg3Observer.subscribe((c => {
      console.log('valores de msg3Observer:', c);
    }));
    this.sendMessage('mensaje 16');
  }

}
