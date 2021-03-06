import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { Subscription } from 'rxjs';
import { EmpUiService } from '../../service/emp-ui.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  text: string;
  @Output() addEmp: EventEmitter<Employee> = new EventEmitter();
  showAddEmployee: boolean;
  subscription: Subscription;

  constructor(private uiService: EmpUiService) { 
    this.subscription = this.uiService.onToggle().subscribe((val) => (this.showAddEmployee = val));
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.text.length == 0){
      alert("Enter Name!")
      return;
    }
    var newEmployee = {
      name: this.text
    }
    this.addEmp.emit(newEmployee);

    this.text="";
  }

}
