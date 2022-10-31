import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  token:any;

  
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
 
}
