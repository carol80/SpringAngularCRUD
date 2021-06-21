import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddEmployee: boolean = false;
  private Subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddEmployee = !this.showAddEmployee;
    this.Subject.next(this.showAddEmployee); 
  }

  onToggle(): Observable<any> {
    return this.Subject.asObservable();
  }
}
