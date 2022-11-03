import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/Note-service/note-service.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  noteArray: any;

  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
    this.getarchieve()
  }
  getarchieve() {  
    this.note.getNotes().subscribe(
      (response: any) => {
        this.noteArray = response.data;
        this.noteArray = this.noteArray.filter((a: any) => {
          return a.isArchive === true;
        })
        console.log(this.noteArray);
      })
  }

}
