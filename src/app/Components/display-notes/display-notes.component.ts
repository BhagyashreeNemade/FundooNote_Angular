import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() GetNote: any;
  @Output() changeNoteEvent = new EventEmitter<string>();
  @Output() updatedisplay = new EventEmitter<string>();
  @Output() messageEvent = new EventEmitter<string>();


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(noteArray: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '400px',
      height: '150px',
      data: noteArray,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.updatedisplay.emit(result);
    });
  }
  recieveArchiveNote(event: any) {
    this.changeNoteEvent.emit(event);
  }
  iconRefresh($event: any) {
    console.log($event);
    this.changeNoteEvent.emit($event)
  }
}


