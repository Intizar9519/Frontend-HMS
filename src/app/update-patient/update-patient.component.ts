import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {

  patient:Patient = new Patient();
  id:number=0;
  constructor(private patientService:PatientService,
     private route:ActivatedRoute, private router:Router) { }
 
  ngOnInit():void{
     this.id=this.route.snapshot.params['id'];
     this.patientService.getPatientById(this.id).subscribe(data=>{
      this.patient=data;
     })
  }

  onSubmit(){
     this.patientService.updatePatient(this.id, this.patient).subscribe(data=>{
      this.goToDocDash();
     })
  }
  
  goToDocDash() {
    this.router.navigate(['/docdash']);
  }
}
