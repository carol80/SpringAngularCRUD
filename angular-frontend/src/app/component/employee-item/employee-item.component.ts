import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import { EmpUiService } from 'src/app/service/emp-ui.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {

  showUpdatedEmployee: boolean;
  @Input() employee: Employee;
  @Output() deleteEmployee: EventEmitter<Employee> = new EventEmitter();
  @Output() updateEmployee: EventEmitter<Employee> = new EventEmitter();


  faTimes = faTimes;
  faPen = faPen;

  constructor(private uiService: EmpUiService) { }

  ngOnInit(): void {
  }

  onDelete(employee: Employee){
    this.deleteEmployee.emit(employee);
  }

  onUpdate(emp: Employee){
    this.updateEmployee.emit(emp);
  }

  onClickUpdate(){
    this.showUpdatedEmployee = !this.showUpdatedEmployee;
    this.uiService.toggleUpdateTask();
  }
}
