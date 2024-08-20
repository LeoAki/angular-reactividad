import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubjectService } from '../../service/hot/behavior-subject.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css'
})
export class BehaviorSubjectComponent implements OnInit {
  servicio = inject(BehaviorSubjectService);
  doble = new Observable<number>();
  derivated = new Observable<number>();
  valueOne =  new Observable<number>();
  valueTwo = new Observable<number>();
  ngOnInit(): void {
    this.servicio.logic();
    this.doble = this.servicio.doubleCount;
    this.derivated = this.servicio.derivedValue;
    this.valueOne = this.servicio.valueOne;
    this.valueTwo = this.servicio.valueTwo;
  }
  action() {
    this.servicio.changeValues();
  }
}
