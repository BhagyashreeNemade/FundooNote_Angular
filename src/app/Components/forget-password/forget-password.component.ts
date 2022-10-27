import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userService/userservice.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgotpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserserviceService) { }

  ngOnInit(): void {
    this.forgotpasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
  });
  }
  onSubmit(){

    this.submitted = true;
  
    if (this.forgotpasswordForm.valid) {
      let reqdata = {
        emailId: this.forgotpasswordForm.value.email,
      }
      this.user.forgotpassword(reqdata).subscribe((Response: any) => {
        console.log(Response);
      });
    }
  }
}
