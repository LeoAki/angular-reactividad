import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HotService } from '../service/hot.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sub',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './sub.component.html',
  styleUrl: './sub.component.css'
})
export class SubComponent {

  public subjectMessage$!: Observable<string>;
  constructor(private messageService: HotService) {
    this.subjectMessage$ = messageService.messageSubect;
  }
}
