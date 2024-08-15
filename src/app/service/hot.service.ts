import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotService {

  // behavierSubject => le puedes mandar los valores que ha emitido,
  // pero si no ha emitido ningún valor, le puedes mandar un valor
  // por defecto.

  // en un Subject, no puedes darle un valor por defecto.
  private message: BehaviorSubject<string> = new BehaviorSubject<string>('Hola');
  constructor() { }

  get messageSubect(): Observable<string> {
    return this.message.asObservable();
  }
  set editMessageSubject(newValue: string) {
    this.message.next(newValue);
  }
}
