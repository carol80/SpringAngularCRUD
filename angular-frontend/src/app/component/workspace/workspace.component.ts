import { Component, OnInit, Input } from '@angular/core';
import { EmpServiceService } from 'src/app/service/emp-service.service';
import { EmpUiService } from 'src/app/service/emp-ui.service';
import { Employee } from '../../Employee'; 

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  @Input() emp: Employee;
  showAddEmployee: boolean = false;
  employees: Employee[] = [];

  constructor(private empService: EmpServiceService, private uiService: EmpUiService) { }

  onClick(){
    this.showAddEmployee = !this.showAddEmployee;
    this.uiService.toggleAddTask();
  }

  ngOnInit(): void {
    this.empService.getAllEmployees().subscribe((e)=>(this.employees = e));
  }

  deleteEmployee(employee : Employee){
    this.empService.deleteEmployee(employee).subscribe(()=>(this.employees = this.employees.filter((e)=>(e.id!=employee.id))));
  }

  updateEmployee(emp: Employee){
    this.empService.updateEmployee(emp).subscribe((e)=>(this.employees = this.employees.map(e => e.id == emp.id ? emp : e)));
  }

  addEmployee(employee: Employee){
    this.empService.addEmployee(employee).subscribe((e) => this.employees.push(e));
  }
}
