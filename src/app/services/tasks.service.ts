import { subscribe } from 'diagnostics_channel';
import { Injectable } from '@angular/core';
import { Task, TaskPriority } from '../interfaces/task';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [];

  tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(
    [
      { name: 'mpempis', completed: false, cost:10.458, date: new Date('2026-02-11'), completionPercentage: 20, priority: TaskPriority.Low, forReminder: true },
      { name: 'gogo', completed: true, cost:553.458, date: new Date('2023-02-11'), completionPercentage: 20, priority: TaskPriority.Low , forReminder: true },
      { name: 'kelamis', completed: false, cost:5, date: new Date('2025-02-11'), completionPercentage: 100, priority: TaskPriority.Unknown , forReminder: false }
    ]
  )

  get tasks$(){
    return this.tasksSubject.asObservable();
  }

  getTaskFromTable(index: number): Observable<Task>{
    return this.tasks$.pipe(
      filter(tasks => tasks.length > 0),
      map(tasks => tasks[index])
    );
  }

  updateTask(index: number, updatedTask: Task): void {
    const tasks = [...this.tasksSubject.value];
    tasks[index] = { ...tasks[index], ...updatedTask };
    this.tasksSubject.next(tasks);
  }
}
