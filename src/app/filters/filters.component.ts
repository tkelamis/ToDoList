import { Component, Input, OnInit, Output } from '@angular/core';
import { Task } from '../interfaces/task';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TaskHoverHighlightDirective } from '../directives/task-hover-highlight.directive';

@Component({
  selector: 'app-filters',
  imports: [FormsModule, NgIf, TaskHoverHighlightDirective],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit {
  
  @Input() showOptionsFlagChild: boolean = false;
  @Input() listToFilter!:Task[];
  @Output() listToFilterChange = new EventEmitter<Task[]>();
  firstAcceptedList: Task[] = [];
  

  ngOnInit(): void {
    this.firstAcceptedList = [...this.listToFilter];
  }

  sortListByCost(){
    const sortedList = [...this.listToFilter].sort((a, b) => b.cost - a.cost);
    this.listToFilterChange.emit(sortedList);
  }

  sortListByName(){
    const sortedList = [...this.listToFilter].sort((a, b) => a.name.localeCompare(b.name));
    this.listToFilterChange.emit(sortedList);
  }

  sortListByStatus(){
    const sortedList = [...this.listToFilter].sort((a, b) => Number(b.completed) - Number(a.completed));
    this.listToFilterChange.emit(sortedList);
  }

  sortListByDate(){
    const sortedList = [...this.listToFilter].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    this.listToFilterChange.emit(sortedList);
  }

  sortListByPriority(){
    const sortedList = [...this.listToFilter].sort((a, b) => {
      const priorityOrder = {
        'High': 1,
        'Medium': 2,
        'Low': 3,
        'Unknown': 4
      };
      
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    this.listToFilterChange.emit(sortedList);
  }

  reset(){
    this.listToFilterChange.emit(this.firstAcceptedList);
  }
}

