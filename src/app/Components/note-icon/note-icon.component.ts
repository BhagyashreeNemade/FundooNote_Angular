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
  @Output() displayicons = new EventEmitter<string>();
  noteID: any;
  isArchive: boolean = false;
  isTrash: boolean = false;
  colour = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey'}
  ]



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
      this.changeNoteEvent.emit(response);
    })
  }
  onTrash() {
    let reqdata = {
      noteID: [this.noteCard.noteID]
    }

    this.note.deleteNote(reqdata).subscribe((response: any) => {
      console.log(response);
      this.changeNoteEvent.emit(response);

    })
  }
  UnArchievenote() {
    let reqdata = {
      noteID: [this.noteCard.noteID],

    }
    this.note.arcieveNote(reqdata).subscribe((response: any) => {
      console.log("note unarchieve",response);
      window.location.reload();

    })

  }
  Restore() {
    let reqdata = {
      noteID: [this.noteCard.noteID]
    }
    this.note.deleteNote(reqdata).subscribe((response: any) => {
      console.log("note restore",response);
      window.location.reload();

    })
  }
  

}







