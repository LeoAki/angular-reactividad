import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectService {

  private data = new BehaviorSubject<boolean>(false);
  private count = new BehaviorSubject(1);
  doubleCount = this.count.pipe(map((count) => count * 2));

  valueOne = new BehaviorSubject(1);
  valueTwo = new BehaviorSubject(10);
  derivedValue = combineLatest([this.valueOne, this.valueTwo]).pipe(
    map(([one, two]) => one * two)
  )

  changeValues() {
    this.valueOne.next((Math.random() * 19) + 2);
    this.valueTwo.next((Math.random() * 19) + 2);
  }

  getData() {
    return this.data.asObservable();
  }

  actualizarData(flag: boolean) {
    this.data.next(flag)
  }

  logic() {
    const obs1 = this.getData();

    obs1.subscribe((x) => {console.log('Obs1::', x)})
    this.actualizarData(true);
    obs1.subscribe((x) => {console.log('Obs2::', x)})
  }

}
