import { Component, OnInit } from '@angular/core';
import { ReplaySubjectService } from '../../service/hot/replay-subject.service';

@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css'
})
export class ReplaySubjectComponent implements OnInit {

  chatHistory: string[] = [];
  constructor(private chatService: ReplaySubjectService) {}
  ngOnInit(): void {
    this.chatService.logic();
  }
}
