import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteServiceService } from 'src/app/services/Note-service/note-service.service';
import { ArchieveComponent } from '../archieve/archieve.component';
import { GettrashComponent } from '../gettrash/gettrash.component';

@Component({
  selector: 'app-note-icon',
  templateUrl: './note-icon.component.html',
  styleUrls: ['./note-icon.component.scss']
})
export class NoteIconComponent implements OnInit {
  @Input() noteCard: any;
  @Output() changeNoteEvent = new EventEmitter<string>();
 
  noteID: any;
  isArchive: boolean = false;
  isTrash: boolean = false;
  colorarray =[{Colorcode:"green"},
  {Colorcode:"rgb(102, 255, 102)"},
  {Colorcode:"rgb(51, 102, 204)"},
  {Colorcode:"rgb(0, 255, 255)"},{Colorcode:"rgb(255, 0, 255)"},
  {Colorcode:"rgb(255, 51, 0)"},{Colorcode:"rgb(0, 51, 0)"},
  {Colorcode:"rgb(255, 255, 0)"},{Colorcode:"rgb(255, 140, 26)"},
  {Colorcode:"rgb(102, 204, 255)"},
  {Colorcode:"rgb(38,30,238)"},
  {Colorcode:"rgb(51, 153, 102)"}];
  colorId: any;



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
    this.note.arcieveNote(reqdata).subscribe((response: any) => {
      console.log(response);
      window.location.reload();
    })
  }
  onTrash() {
    let reqdata = {
      noteID: [this.noteCard.noteID]
    }

    this.note.deleteNote(reqdata).subscribe((response: any) => {
      console.log(response);
      window.location.reload();

    })
  }
  UnArchievenote() {
    let reqdata = {
      noteID: [this.noteCard.noteID],

    }
    this.note.arcieveNote(reqdata).subscribe((response: any) => {
      console.log("note unarchieve", response);
      window.location.reload();

    })

  }
  Restore() {
    let reqdata = {
      noteID: [this.noteCard.noteID]
    }
    this.note.deleteNote(reqdata).subscribe((response: any) => {
      console.log("note restore", response);
      window.location.reload();

    })
  }
  setColor(color: any) {
    this.colorId = this.noteCard.color=color;
    let reqData = {
      color: color,
      noteID: [this.noteCard.noteID]
    };
     
    this.note.change_note_color(reqData).subscribe((response: any) => {
      console.log(response);
      this.changeNoteEvent.emit(response);

      console.log(reqData)

    })

  }
}









