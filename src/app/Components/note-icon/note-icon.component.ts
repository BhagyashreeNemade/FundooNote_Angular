import { Component, Input, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/Note-service/note-service.service';

@Component({
  selector: 'app-note-icon',
  templateUrl: './note-icon.component.html',
  styleUrls: ['./note-icon.component.scss']
})
export class NoteIconComponent implements OnInit {
  @Input() noteCard: any;
  noteID: any;
  isArchive: boolean = false;


  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
  }
  onArchiev() {
    let reqdata = {
      noteID: [this.noteCard.noteID]

    }
    console.log(reqdata);
    this.note.arcieveNote(reqdata).subscribe((Response: any) => {
      console.log(Response);
    })
  }
  onTrash() {
    let reqdata = {
      noteID: [this.noteCard.noteID]
    }

    this.note.deleteNote(reqdata).subscribe((response: any) => {
      console.log(response);

    })

  }


}


