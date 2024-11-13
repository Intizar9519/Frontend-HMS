import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DocauthService } from '../docauth.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-docdash',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {

  constructor(private patientService:PatientService, private router:Router, private docauthService:DocauthService) { }
  patients:Patient[] = [];

  ngOnInit():void {
    this.getPatients();
  }
  
  getPatients() {
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    })
  }

  update(id:number){
     this.router.navigate(['update-patient',id]);
  }

  delete(id:number){
    this.patientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
  }
  view(id:number){
    this.router.navigate(['view-patient',id]);
  }

  logout(){
    this.docauthService.logout();
    this.router.navigate([`home`]);
  }
}
