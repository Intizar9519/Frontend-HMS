import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { } 

  authenticate(username2:string, password2:string){
    if(username2 == "admin" && password2 == "admin123"){
      sessionStorage.setItem('username2',username2);
      return true;
    }
    else {
      return false;
    }  
  }

  isUserLoggedIn(){
    console.log("User Login ho gaya hai.");
    let user = sessionStorage.getItem('username2');
    return !(user==null);
  }

  logout() {
    console.log("user logout ho gaya.");
    sessionStorage.removeItem('username2');
  }
}
