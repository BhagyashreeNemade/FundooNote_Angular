import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/Note-service/note-service.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  NotesList: any;

  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
    this.getarchieve()
  }
  getarchieve() {
    this.note.getNotes().subscribe(
      (response: any) => {
        console.log('Allnotes', response);
        this.NotesList = response.data;
        this.NotesList.reverse();
        this.NotesList = this.NotesList.filter((a: any) => {
          return a.isArchive === true;
        })
        console.log("Archive note list", this.NotesList);


      })
  }
  updatedIcon(event: any) {
    this.getarchieve();
  }
}

