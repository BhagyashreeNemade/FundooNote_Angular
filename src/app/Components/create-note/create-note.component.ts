import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteServiceService } from 'src/app/services/Note-service/note-service.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  createnoteForm!: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder, private note: NoteServiceService) { }

  ngOnInit(): void {
    this.createnoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      color:" "
      
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.createnoteForm.value);
    if (this.createnoteForm.valid) {
      let reqdata = {
        title: this.createnoteForm.value.title,
        note: this.createnoteForm.value.description,
        color:this.createnoteForm.value.color

      }
      this.note.addnote(reqdata).subscribe((Response: any) => {
        console.log(Response);
        this.messageEvent.emit(Response)
      });
    }
    this.createnoteForm.reset();
  }
}
