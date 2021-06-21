import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from 'src/app/service/emp-service.service';
import { Employee } from '../../Employee'; 

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  showAddEmployee: boolean = false;
  employees: Employee[] = [];

  constructor(private empService: EmpServiceService) { }

  onClick(){
    console.log("toggle!!");
  }

  ngOnInit(): void {
    this.empService.getAllEmployees().subscribe((e)=>(this.employees = e));
  }

  deleteEmployee(employee : Employee){
    this.empService.deleteEmployee(employee).subscribe(()=>(this.employees = this.employees.filter((e)=>(e.id!=employee.id))));
  }

  updateEmployee(employee: Employee){
    // this.empService.updateEmployee(employee).subscribe();
    console.log(employee);
  }

  addEmployee(employee: Employee){
    this.empService.addEmployee(employee).subscribe((e) => this.employees.push(e));
  }
}
