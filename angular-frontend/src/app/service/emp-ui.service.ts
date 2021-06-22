import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpUiService {

  private showAddEmployee: boolean = false;
  private showUpdatedEmployee: boolean = false;
  private Subject = new Subject<any>();
  private Subject1 = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddEmployee = !this.showAddEmployee;
    this.Subject.next(this.showAddEmployee); 
  }

  toggleUpdateTask(): void{
    this.showUpdatedEmployee = !this.showUpdatedEmployee;
    this.Subject1.next(this.showUpdatedEmployee); 
  }

  onToggle(): Observable<any> {
    return this.Subject.asObservable();
  }

  onToggleUpdate(): Observable<any> {
    return this.Subject1.asObservable();
  }
}
