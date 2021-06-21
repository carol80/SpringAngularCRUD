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

  ngOnInit(): void {
    this.empService.getAllEmployees().subscribe((e)=>(this.employees = e));
  }

  onClick(){
    console.log("toggle!!");
  }

}
