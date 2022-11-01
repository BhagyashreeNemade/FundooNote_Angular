import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/Note-service/note-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any;
  description: any;


  constructor() { }

  ngOnInit(): void {
  }

}
