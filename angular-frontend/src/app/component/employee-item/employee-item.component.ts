import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {

  @Input() employee: Employee;
  @Output() deleteEmployee: EventEmitter<Employee> = new EventEmitter();
  @Output() updateEmployee: EventEmitter<Employee> = new EventEmitter();


  faTimes = faTimes;
  faPen = faPen;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(employee: Employee){
    this.deleteEmployee.emit(employee);
  }

  onUpdate(employee: Employee){
    this.updateEmployee.emit(employee);
  }
}
