import { computed, effect, Injectable, Injector, signal } from '@angular/core';
import { Task } from '../interfaces/task';
import { ILogger } from '../interfaces/ILogger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements ILogger {
  sortedlist = signal<Task[]>([]);
  filteredList = signal<Task[]>([]);
  sortedListCounter = computed(() => {
    return this.sortedlist().length;
  })

    constructor(private injector: Injector) {
        effect(() => {
          console.log("The sorted list signal updated to:", this.sortedlist(), "and has ",this.sortedListCounter()," items");
        })

      effect(() => {
          console.log("The 'filteredlist' signal updated to:", this.filteredList());
        })
      }

  logList(tasks: Task[]): void {
    //this.sortedlist.set(tasks);
    console.log("Im sort list logger")
  }

}
