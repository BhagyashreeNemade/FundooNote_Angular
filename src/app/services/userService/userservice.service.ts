import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpService) { }

registration(reqdata:any){
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  return this.http.postService('https://localhost:44368/api/User/Register',reqdata,false,header)
}
login(reqdata:any){
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'token'
    })
  }
  return this.http.postService('https://localhost:44368/api/User/Login',reqdata,false,header)
}
