import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../interfaces/task';



@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [
    { name: 'tsimaras', completed: true, cost: 0, date: new Date('2025-03-11'), completionPercentage: 0.50 },
    { name: 'kelamis', completed: false, cost:553.458, date: new Date('2025-02-11'), completionPercentage: 0.20 }
  ]
  @Output() tasksUpdated = new EventEmitter<Task[]>();

  ngOnInit(): void {
    
    this.sendTasks();
  
  }

  sendTasks() {
    this.tasksUpdated.emit(this.tasks);
  }
}
