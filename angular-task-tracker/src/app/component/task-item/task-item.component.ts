import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Tasks";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter();
  faAddressCard = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task){
    this.deleteTask.emit(task);
  }

  onToggle(task: Task){
    this.task.reminder = !this.task.reminder;
    this.toggleReminder.emit(task);
  }
}
