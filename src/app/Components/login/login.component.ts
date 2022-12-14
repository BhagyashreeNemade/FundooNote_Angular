import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userService/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  users= "1";

  constructor(private formBuilder: FormBuilder, private user: UserserviceService, private rout: Router,) { }

  ngOnInit(): void {
    localStorage.setItem('SeesionUser', this.users)
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      let reqdata = {
        emailId: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.user.login(reqdata).subscribe((Response: any) => {
        console.log(Response);
        localStorage.setItem("token", Response.token);
      })
    }
    else {
      console.log("invalid data", this.loginForm.value);
      console.log("no api call");
    }

   this.rout.navigateByUrl('/mydashboard');

  }
}
