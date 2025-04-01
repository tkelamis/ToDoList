import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class ListUtilityService {

  constructor() { }

  sortList(selection: string , listToFilter:Task[]):Task[]{
    switch (selection) {
      case 'ByCost':
        return [...listToFilter].sort((a, b) => b.cost - a.cost);
      case 'ByName':
          return [...listToFilter].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
      case 'ByStatus':
        return [...listToFilter].sort((a, b) => Number(b.completed) - Number(a.completed));
      case 'ByDateInserted':
        return [...listToFilter].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      case 'ByPriority':
        return this.sortListByPriority(listToFilter);
      default:
        return listToFilter;
    }
  }

  sortListByPriority(listToFilter: Task[]){
    const sortedList = [...listToFilter].sort((a, b) => {
      const priorityOrder = {
        'High': 1,
        'Medium': 2,
        'Low': 3,
        'Unknown': 4
      };
      
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    return sortedList;
  }
}
