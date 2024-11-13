import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-update-medicine',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {

  medicine:Medicine = new Medicine();
  id:number=0;
  constructor(private medicineService: MedicineService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data => {
      this.medicine = data;
      });
  }

  onSubmit() {
    this.medicineService.updateMedicine(this.id, this.medicine).subscribe(data => {
      console.log(data);
      this.goToMedicineList();
      });
  }

  goToMedicineList(){
    this.router.navigate(['/medicinelist']);
  }
}
