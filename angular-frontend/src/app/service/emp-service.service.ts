import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  private apiUrl = "http://localhost:5000/employees";

  constructor(private http:HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
