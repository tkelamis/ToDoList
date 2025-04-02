import { ILogger } from '../interfaces/ILogger';
import { LoggerService } from './../services/logger.service';
import { ListUtilityService } from './../services/list-utility.service';
import { Component, inject, Inject, Input, OnInit, Output, signal } from '@angular/core';
import { Task } from '../interfaces/task';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskHoverHighlightDirective } from '../directives/task-hover-highlight.directive';

@Component({
  selector: 'app-filters',
  imports: [FormsModule, TaskHoverHighlightDirective],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
  providers: [
    ListUtilityService,
    { provide: 'ILogger', useClass: LoggerService }, // Bind ILogger to ConsoleLogService
  ]
})
export class FiltersComponent implements OnInit {
  
  @Input() showOptionsFlagChild: boolean = false;
  @Input() listToFilter!:Task[];
  @Output() listToFilterChange = new EventEmitter<Task[]>();
  firstAcceptedList: Task[] = [];
  _listUtility: ListUtilityService;
  private _loggerService: ILogger;

  constructor(listUtility: ListUtilityService,@Inject('ILogger') loggerService: ILogger){
    this._listUtility = listUtility;
    this._loggerService = loggerService;
  }

  ngOnInit(): void {
    this.initializeList();
  }

  sortList(event: Event){
    const selection = (event.target as HTMLElement).textContent?.replace(/\s+/g, '');

    if(selection){
      const sortedList = this._listUtility.sortList(selection, this.listToFilter);
      this.listToFilterChange.emit(sortedList);
      this._loggerService.logSortedList(sortedList);
    }
  }

  initializeList(){
    this.firstAcceptedList = [...this.listToFilter];
  }

  reset(){
    this.listToFilterChange.emit(this.firstAcceptedList);
  }
}