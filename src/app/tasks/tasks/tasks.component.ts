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
    { name: 'gogo', completed: false, cost:553.458, date: new Date('2025-02-11'), completionPercentage: 20, priority: TaskPriority.Low },
    { name: 'kelamis', completed: false, cost:553.458, date: new Date('2025-02-11'), completionPercentage: 20, priority: TaskPriority.Unknown },
    { name: 'tsimaras', completed: false, cost: 0, date: new Date('2025-03-11'), completionPercentage: 0, priority: TaskPriority.High }
  ]
  

  @Output() tasksUpdated = new EventEmitter<Task[]>();

  constructor(private uppercasePipe: UpperCasePipe){}

  ngOnInit(): void {
    this.sendTasks();
  }

  sendTasks() {
    this.tasksUpdated.emit(this.tasks);
  }

}

