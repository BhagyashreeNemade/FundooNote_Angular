import { Component, Inject, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/Note-service/note-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any;
  description: any;
  noteID: any;


  constructor(private notes: NoteServiceService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
    console.log(this.data);
    this.title = this.data.title;
    this.description = this.data.note;
    this.noteID=this.data.noteID;


  }


  onNoClick(): void {
    
    let reqdata ={ 
      title: this.title,
      note: this.description

    }
    this.notes.updateNote(reqdata, this.noteID).subscribe((Response: any) => {
      console.log(Response);
    });
    this.dialogRef.close();
  }
}



