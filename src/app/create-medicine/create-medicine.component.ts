import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-create-medicine',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {

  medicine:Medicine = new Medicine();
  constructor(private medicineService:MedicineService, private router:Router) { }

  saveMedicine(){
    this.medicineService.createMedicine(this.medicine).subscribe(data=>{
      this.goToMedicine();
    })
  }
  onSubmit(){
     this.saveMedicine();
  }
  goToMedicine(){
    this.router.navigate(['/medicinelist']);
  }
}
