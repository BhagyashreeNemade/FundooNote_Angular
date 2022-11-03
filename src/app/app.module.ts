import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ArchieveComponent } from './Components/archieve/archieve.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { GettrashComponent } from './Components/gettrash/gettrash.component';
import { MydashboardComponent } from './Components/mydashboard/mydashboard.component';
import { NoteIconComponent } from './Components/note-icon/note-icon.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { UpdateComponent } from './Components/update/update.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ArchieveComponent,
    CreateNoteComponent,
    DisplayNotesComponent,
    GetallnotesComponent,
    GettrashComponent,
    MydashboardComponent,
    NoteIconComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FlexLayoutModule,FormsModule,ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
