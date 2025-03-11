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
    { name: 'tsimaras', completed: true },
    { name: 'kelamis', completed: false }
  ]
  @Output() tasksUpdated = new EventEmitter<Task[]>();

  ngOnInit(): void {
    
    this.sendTasks();
  
  }

  sendTasks() {
    this.tasksUpdated.emit(this.tasks);
  }
}
