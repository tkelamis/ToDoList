import { LoggerService } from './../services/logger.service';
import { ListUtilityService } from './../services/list-utility.service';
import { Component, Input, OnInit, Output, signal } from '@angular/core';
import { Task } from '../interfaces/task';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskHoverHighlightDirective } from '../directives/task-hover-highlight.directive';

@Component({
  selector: 'app-filters',
  imports: [FormsModule, TaskHoverHighlightDirective],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit {
  
  @Input() showOptionsFlagChild: boolean = false;
  @Input() listToFilter!:Task[];
  @Output() listToFilterChange = new EventEmitter<Task[]>();
  firstAcceptedList: Task[] = [];
  _listUtility: ListUtilityService;
  _loggerService: LoggerService;

  constructor(listUtility: ListUtilityService, loggerService: LoggerService){
    this._listUtility = listUtility;
    this._loggerService = loggerService;
  }

  ngOnInit(): void {
    this.firstAcceptedList = [...this.listToFilter];
  }

  sortList(event: Event){
    const selection = (event.target as HTMLElement).textContent?.replace(/\s+/g, '');

    if(selection){
      const sortedList = this._listUtility.sortList(selection, this.listToFilter);
      this.listToFilterChange.emit(sortedList);
      this._loggerService.logSortedList(sortedList);
    }
  }

  reset(){
    this.listToFilterChange.emit(this.firstAcceptedList);
  }
}