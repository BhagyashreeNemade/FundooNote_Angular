import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/Note-service/note-service.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {

  getNotes: any;
  noteArray: any;

  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote() {
    this.note.getNotes().subscribe((response: any) => {
      console.log(response.data);
      this.noteArray = response.data;
    })

  }
  receiveMessage($event: any) {
    console.log($event);
    this.getAllNote();
  }
}

