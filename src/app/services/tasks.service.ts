import { subscribe } from 'diagnostics_channel';
import { Injectable } from '@angular/core';
import { Task, TaskPriority } from '../interfaces/task';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(
    [
      { id:1, name: 'mpempis', completed: false, cost:10.458, date: new Date('2026-02-11'), completionPercentage: 20, priority: TaskPriority.Low },
      { id:2, name: 'gogo', completed: false, cost:553.458, date: new Date('2023-02-11'), completionPercentage: 20, priority: TaskPriority.Low },
      { id:3, name: 'kelamis', completed: false, cost:5, date: new Date('2025-02-11'), completionPercentage: 100, priority: TaskPriority.Unknown }
    ]
  )
  tasks: Task[] = [];

  constructor() { }

  get tasks$(){
    return this.tasksSubject.asObservable();
  }


  logTasks(){
    this.tasks$.subscribe(tasks =>{
      console.log(tasks)
    });
  }


}
