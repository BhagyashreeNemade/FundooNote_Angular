import { Injectable ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService {

  constructor() { }
  gettoken(){  
    return !!localStorage.getItem("token");  
    }  
}
