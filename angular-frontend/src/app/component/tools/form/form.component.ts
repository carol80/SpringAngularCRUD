import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmpUiService } from 'src/app/service/emp-ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  text: string;
  @Input() employee: Employee;
  @Output() updatedEmployee: EventEmitter<Employee> = new EventEmitter();
  showUpdateEmployee: boolean;
  subscription: Subscription;

  constructor(private uiService: EmpUiService) { 
    this.subscription = this.uiService.onToggle().subscribe((val) => (this.showUpdateEmployee = val));
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.text.length==0){
      alert("Enter name!");
      return;
    }

    var updEmployee = {
      "id" : this.employee.id,
      "name" : this.text
    }

    this.updatedEmployee.emit(updEmployee);
    this.text="";
  }

}
