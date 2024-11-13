import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {

    
   username:string='';
   password:string='';
   
   inValidLogin=false;

   constructor(private router:Router,private docauth:DocauthService){}

   checkLogin(){
                 
             if(this.docauth.authenticate(this.username,this.password)){
            
                this.router.navigate(['docdash']);
                this.inValidLogin=false;

             }
             else{
                     this.inValidLogin=true;
                      alert("Wrong Credintials");
                      this.router.navigate(['home']);
                    
             }
   }

   cancel(){
      this.router.navigate(['home']);
   }

}
