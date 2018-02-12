import { Component } from '@angular/core';

import { ITask } from './../shared/types'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  private tasks: Array<ITask>;
  constructor() {
    this.tasks = [
      { 
        title : "Swiffer Floor",
        group : "Chores",
        deferDate : new Date(),
        dueDate : new Date(),
        dateString : new Date().toDateString(),
        completed : false
      },
      { 
        title : "Change Sheets",
        group : "Chores",
        deferDate : new Date(),
        dueDate : new Date(),
        dateString : new Date().toDateString(),
        completed : false
      },
      { 
        title : "Chores",
        group : "No Group",
        deferDate : new Date(),
        dueDate : new Date(),
        dateString : new Date().toDateString(),
        completed : false
      }
    ]
  }

}