import { ILogger } from '../interfaces/ILogger';
import { ListUtilityService } from '../services/list-utility.service';
import { Component, Inject, Input, OnInit, Output, signal } from '@angular/core';
import { Task } from '../interfaces/task';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskHoverHighlightDirective } from '../directives/task-hover-highlight.directive';
import { FilterLoggerService } from '../services/filter-logger.service';
import { IHTMLContent } from '../interfaces/IHTMLcontent';
import { HTMLContentService } from '../services/htmlcontent.service';
import { IListUtility } from '../interfaces/ilist-utility';

@Component({
  selector: 'app-sorter',
  imports: [FormsModule, TaskHoverHighlightDirective],
  templateUrl: './sorter.component.html',
  styleUrl: './sorter.component.css',
  providers: [
    { provide: 'ILogger', useClass: FilterLoggerService },
    { provide: 'IHTMLContent', useClass: HTMLContentService },
    { provide: 'IListUtility', useClass: ListUtilityService }
  ]
})
export class SorterComponent implements OnInit {
  
  @Input() showOptionsFlagChild: boolean = false;
  @Input() listToFilter!:Task[];
  @Output() listToFilterChange = new EventEmitter<Task[]>();
  firstAcceptedList: Task[] = [];

  constructor(
    @Inject('IHTMLContent') private htmlContent: IHTMLContent,
    @Inject('IListUtility') private listUtility: IListUtility,
    @Inject('ILogger') private loggerService: ILogger){
  }

  ngOnInit(): void {
    this.initializeList();
  }

  sortList(event: Event){
    const selection = this.htmlContent.getHTMLContent(event);

    if(selection){
      const sortedList = this.listUtility.sortList(selection, this.listToFilter);
      this.loggerService.logList(sortedList);

      this.listToFilterChange.emit(sortedList);
    }
  }

  initializeList(){
    this.firstAcceptedList = [...this.listToFilter];
  }

  reset(){
    this.listToFilterChange.emit(this.firstAcceptedList);
  }
}