import { Component, Input, OnInit } from '@angular/core';
import { Task, TaskPriority } from '../../interfaces/task';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-task-overview',
  imports: [],
  templateUrl: './task-overview.component.html',
  styleUrl: './task-overview.component.css'
})
export class TaskOverviewComponent implements OnInit {

  numberOfCompletedTasks:number =0;
  numberOfInProgressTasks: number =0;

  @Input()
  set tasksList(receivedListFromParent: Task[]){
    this._tasksList = receivedListFromParent.sort((a, b) => {
      if (a.priority === TaskPriority.High && b.priority !== TaskPriority.High) {
        return -1;
      } else if (a.priority !== TaskPriority.High && b.priority === TaskPriority.High) {
        return 1;
      }
      return 0;
    });
  }
  _tasksList: Task[] = [];
  
  ngOnInit(): void {
    this.getNumberOfCompletedTasks();
    this.getNumberOfInProgressTasks();
    console.log(this.numberOfInProgressTasks)
  }

  getNumberOfCompletedTasks(): void{
    this.numberOfCompletedTasks = this._tasksList.filter(task => task.completed).length;
  }

  getNumberOfInProgressTasks(): void{
    this.numberOfInProgressTasks = this._tasksList.length - this._tasksList.filter(task => task.completed).length;
  }
}
