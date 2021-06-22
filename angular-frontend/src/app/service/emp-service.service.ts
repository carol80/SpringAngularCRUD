import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  private apiUrl = "http://localhost:8080/api/v1";

  constructor(private http:HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/showAll`);
  }

  deleteEmployee(employee: Employee): Observable<Employee>{
    return this.http.delete<Employee>(`${this.apiUrl}/delete/${employee.id}`);
  }

  addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.apiUrl}/save`, employee, httpOptions);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/update/${employee.id}`, employee, httpOptions);
  }
}
