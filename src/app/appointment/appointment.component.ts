import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  appointments:Appointment[]=[];
  constructor(private appointmentService:AppointmentService) {
  }
  
  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments(){
    this.appointmentService.getAllAppointments().subscribe(data => {
      this.appointments=data;
    }) 
  }

  delete(id:number){
      this.appointmentService.deleteAppointment(id).subscribe(data=>{
        console.log(data);
        this.getAppointments();
      })   
  }

}