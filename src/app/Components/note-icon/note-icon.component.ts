import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteServiceService } from 'src/app/services/Note-service/note-service.service';
import { ArchieveComponent } from '../archieve/archieve.component';
import { GetallnotesComponent } from '../getallnotes/getallnotes.component';
import { GettrashComponent } from '../gettrash/gettrash.component';

@Component({
  selector: 'app-note-icon',
  templateUrl: './note-icon.component.html',
  styleUrls: ['./note-icon.component.scss']
})
export class NoteIconComponent implements OnInit {
  @Input() noteCard: any;
  noteID: any;
  isArchive: boolean = false;
  isTrash: boolean = false;



  constructor(private note: NoteServiceService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    let Component = this.activatedroute.snapshot.component;


    if (Component == GettrashComponent) {
      this.isTrash = true;
    }

    if (Component == ArchieveComponent) {
      this.isArchive = true;
    }
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
  UnArchievenote() {
    let reqdata = {
      noteID: [this.noteCard.noteID],

    }
    this.note.arcieveNote(reqdata).subscribe((response: any) => {
      console.log("note unarchieve",response);

    })

  }
  Restore() {
    let reqdata = {
      noteID: [this.noteCard.noteID],
      isTrash: false,
    }
    this.note.deleteNote(reqdata).subscribe((response: any) => {
      console.log("note restore",response);

    })
  }

}







