import { computed, Injectable, signal } from '@angular/core';

export interface dataI {
  name: string;
  lastname: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  dataPerson = signal<dataI>({ lastname: 'Aquino', name: 'Leonardo' });

  count = signal(0);
  doubleCount = computed(()=> this.count()*2);

  valueOne = signal(1);
  valueTwo = signal(10);

  derivedValue = computed(() => this.valueOne() * this.valueTwo());
  changeValues() {
    this.valueOne.set(Math.floor(Math.random() * 19) + 2);
    this.valueTwo.set(Math.floor(Math.random() * 19) + 2);
  }

}
