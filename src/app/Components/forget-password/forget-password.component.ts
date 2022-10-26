import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgotpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgotpasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
  });
  }
  onSubmit(){
    this.submitted = true;
    if (this.forgotpasswordForm.invalid) {
      return;
  }
  }
}
