import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicinelist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {

  medicines:Medicine[]=[];
  constructor(private medicineService:MedicineService, private router:Router) { }

  ngOnInit():void {
    this.getMedicine();
  }

  getMedicine() {
    this.medicineService.getMedicines().subscribe(data=>{
      this.medicines=data;
    })
  }

  update(id:number) {
    this.router.navigate(['/update-medicine', id]);
  }

  delete(id:number){
    this.medicineService.deleteById(id).subscribe(data=>{
      console.log(data);
      this.getMedicine();
    })
  }
}
