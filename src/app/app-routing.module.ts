import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ArchieveComponent } from './Components/archieve/archieve.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { GettrashComponent } from './Components/gettrash/gettrash.component';
import { MydashboardComponent } from './Components/mydashboard/mydashboard.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { NoteIconComponent } from './Components/note-icon/note-icon.component';

const routes: Routes = [
  { path: 'registration', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-pass', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'createnote', component: CreateNoteComponent},
  { path: 'noteicon', component: NoteIconComponent},
  { path: 'getallnotes', component: GetallnotesComponent },
  { path: 'mydashboard', component: MydashboardComponent ,
  
    children: [
      { path: 'getallnotes', component: GetallnotesComponent },
      { path: 'gettrash', component: GettrashComponent },
      { path: 'archieve', component: ArchieveComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
