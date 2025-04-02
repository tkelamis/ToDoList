import { effect, Injectable, Injector, signal } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  sortedlist = signal<Task[]>([]);
  filteredList = signal<Task[]>([]);

    constructor(private injector: Injector) {
        effect(() => {
          console.log("The sorted list signal updated to:", this.sortedlist());
        })

      effect(() => {
          console.log("The 'filteredlist' signal updated to:", this.filteredList());
        })
      }

    logSortedList(tasks: Task[]): void {
      this.sortedlist.set(tasks);
    }

    logFilteredList(tasks: Task[]): void {
      this.filteredList.set(tasks);
    }
}
