import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userService/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  public showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder,private user:UserserviceService) { }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }
   public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    this.submitted = true;
    

    if (this.registerForm.valid) {
      console.log("valid data",this.registerForm.value);
    console.log("do api call");
      let reqdata = {
        firstname: this.registerForm.value.firstName,
        lastname: this.registerForm.value.lastName,
        emailId: this.registerForm.value.email,
        password: this.registerForm.value.password
      }
      this.user.registration(reqdata).subscribe((Response: any) => {
        console.log(Response);
      })
    }
    else{
      console.log("invalid data",this.registerForm.value);
      console.log("no api call");
    }
  }
}

