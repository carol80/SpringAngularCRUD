import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from "../../Tasks";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((ele) => (this.tasks = ele));
  }

  deleteTask(task: Task){
    this.taskService.deleteTasks(task).subscribe(() => (this.tasks = this.tasks.filter((t)=> (t.id !== task.id))));
  }

  updateTaskReminder(task: Task){
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task)=> (this.tasks.push(task)));
  }
}
