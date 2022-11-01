import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  token:any;
  noteid: any;

  
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem("token")
  }
  addnote(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postService('https://localhost:44368/api/Note/Add', reqdata, true, header)
 
  }
  getNotes() {
    console.log(this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('https://localhost:44368/api/Note/Get', true, header)
  }
  updateNote(reqdata: any,noteid:any) {
    console.log(reqdata);
    console.log(this.token);
    console.log(this.noteid)

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`https://localhost:44368/api/Note/Update/${noteid}`, reqdata, true, header)
  }
}
