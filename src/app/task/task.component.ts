import { Component, Input } from '@angular/core';

import { ITask } from './../shared/types'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() taskObject: ITask;
  constructor() {
    this.taskObject = { 
      title : "Chores",
      group : "No Group",
      deferDate : new Date(),
      dueDate : new Date(),
      dateString : new Date().toDateString(),
      completed : false
    }
  }

}