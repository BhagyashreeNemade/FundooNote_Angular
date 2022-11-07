import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/Note-service/note-service.service';

@Component({
  selector: 'app-gettrash',
  templateUrl: './gettrash.component.html',
  styleUrls: ['./gettrash.component.scss']
})
export class GettrashComponent implements OnInit {
  NotesList: any;

  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
    this.gettrash()
  }
  gettrash() {    // Api integartion for api notes 
    this.note.getNotes().subscribe(
      (response: any) => {
        console.log('Allnotes',response);
        this.NotesList=response.data
        this.NotesList.reverse();
        this.NotesList = this.NotesList.filter((a: any) => {
          return a.isTrash == true && a.isArchive == false;
        })
        console.log('Trashnotes',this.NotesList);
      })
  }
  receiveMessage(event:any){
    this.gettrash();
    }


}
