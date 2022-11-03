import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/Note-service/note-service.service';

@Component({
  selector: 'app-gettrash',
  templateUrl: './gettrash.component.html',
  styleUrls: ['./gettrash.component.scss']
})
export class GettrashComponent implements OnInit {
  noteArray: any;

  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
    this.gettrash()
  }
  gettrash() {    // Api integartion for api notes 
    this.note.getNotes().subscribe(
      (response: any) => {
        this.noteArray = response.data;
        this.noteArray = this.noteArray.filter((a: any) => {
          return a.isTrash == true;
        })
        console.log(this.noteArray);
      })
  }

}
