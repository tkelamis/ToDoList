import { Injectable } from '@angular/core';
import { ILogger } from '../interfaces/ILogger';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class FilterLoggerService implements ILogger {

  constructor() { }

  logList(tasks: Task[]): void {
    console.log("Im filter list logger")
  }
}
