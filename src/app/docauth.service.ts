import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { } 

  authenticate(username:string, password:string){
    if(username == "doctor" && password == "doctor123"){
      sessionStorage.setItem('username',username);
      return true;
    }
    else {
      return false;
    }  
  }

  
  isUserLogegIn(){
    console.log("User Login ho gaya hai.");
    let user = sessionStorage.getItem('username');
    return !(user==null);
  }

  logout() {
    console.log("user logout ho gaya.");
    sessionStorage.removeItem('username');
  }
} 
