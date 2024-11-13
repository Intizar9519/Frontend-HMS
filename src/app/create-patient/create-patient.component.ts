import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-create-patient',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {

  patient:Patient = new Patient();
  constructor(private patientService:PatientService, private router:Router) { }

  savePatient() {
    this.patientService.createPatient(this.patient).subscribe(data=>{
      this.goToPatientList();
    })
  }
  onSubmit(){
     this.savePatient();
  }
  goToPatientList() {
    this.router.navigate(['/docdash']);
  }
}