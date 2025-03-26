import { TaskPriority } from './../../interfaces/task';
import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../interfaces/task';
import { UpperCasePipe } from '@angular/common';



@Component({
  selector: 'app-tasks',
  imports: [],
  providers: [UpperCasePipe],
  templateUrl: 'tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [
    { name: 'gogo', completed: false, cost:10.458, date: new Date('2026-02-11'), completionPercentage: 20, priority: TaskPriority.Low },
    { name: 'gogo', completed: false, cost:553.458, date: new Date('2023-02-11'), completionPercentage: 20, priority: TaskPriority.Low },
    { name: 'kelamis', completed: false, cost:5, date: new Date('2025-02-11'), completionPercentage: 100, priority: TaskPriority.Unknown }
  ]
  

  @Output() tasksUpdated = new EventEmitter<Task[]>();

  constructor(private uppercasePipe: UpperCasePipe){}

  ngOnInit(): void {
    this.setCompleted();
    this.sendTasks();
  }

  setCompleted(){
    for (let task of this.tasks){
      if(task.completionPercentage===100){
        task.completed = true;
      }
    }
  }

  sendTasks() {
    this.tasksUpdated.emit(this.tasks);
  }

}

