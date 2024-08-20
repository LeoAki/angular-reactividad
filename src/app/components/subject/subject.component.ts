import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../service/hot/subject.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {

  constructor(
    private notificationService: SubjectService
  ) {}

  quote: string = '';
  justMessage: string = '';

  ngOnInit(): void {
    // this.notificationService.getMessages().subscribe(msg => {
    //   this.justMessage = msg;
    // })
    this.notificationService.logic();
  }

  sendMessages(mensaje: string) {
    this.notificationService.sendMessage('Leo dice:: ' + mensaje);
  }

}
