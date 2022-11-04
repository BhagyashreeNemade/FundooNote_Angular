import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/Note-service/note-service.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {

  getNotes: any;
  NotesList: any;
  

  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote() {
    this.note.getNotes().subscribe((response: any) => {
      console.log('Allnotes', response);
      this.NotesList = response.data
      this.NotesList.reverse();
      this.NotesList= this.NotesList.filter((a:any)=>{
        return a.isArchive==false && a.isTrash==false;
      })
      console.log(this.NotesList);
    })

  }
  receiveMessage($event:any){
    console.log($event);
  this.getAllNote();
  }
  updatedIcon($event:any) {
    console.log($event);
    this.getAllNote();
  }
  receiveMessagearchive($event:any){
    console.log($event);
    this.getAllNote();
  }
  iconRefresh($event:any){
    console.log($event)
    this.getAllNote();
  }
}

