import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpCient:HttpClient) { }
  private baseUrl = "http://localhost:8080/api/v2/medicines";

  getMedicines():Observable<Medicine[]>{
    return this.httpCient.get<Medicine[]>(`${this.baseUrl}`);
  }

  createMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpCient.post<Medicine>(`${this.baseUrl}`,medicine);
  }

  getMedicineById(id:number):Observable<Medicine>{
    return this.httpCient.get<Medicine>(`${this.baseUrl}/${id}`);
  }

  updateMedicine(id:number,medicine:Medicine):Observable<object>{
    return this.httpCient.put<Medicine>(`${this.baseUrl}/${id}`,medicine);
  }

  deleteById(id:number):Observable<object>{
    return this.httpCient.delete(`${this.baseUrl}/${id}`);
  }
}
