import { Task } from './../../interfaces/task';
import { DialogService } from '../../services/dialog.service';
import { MatIconModule } from '@angular/material/icon';
import { PriorityLabelPipePipe } from '../../Pipes/priority-label-pipe.pipe';
import { TasksComponent } from '../tasks/tasks.component';
import { AfterViewInit, Component, ViewChild, viewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { CompletedHighlightDirective } from '../../directives/completed-highlight.directive';
import { TaskHoverHighlightDirective } from '../../directives/task-hover-highlight.directive'
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TaskOverviewComponent } from "../task-overview/task-overview.component";
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from "../../filters/filters.component";
import { SortersComponent } from "../../sorters/sorters.component";
import { TaskReminderComponent } from "../task-reminder/task-reminder.component";


@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [
    FormsModule, CommonModule,
    MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatNativeDateModule, MatDatepickerModule,
    CompletedHighlightDirective, TaskHoverHighlightDirective,
    PriorityLabelPipePipe,
    TaskOverviewComponent, SortersComponent, FiltersComponent, TasksComponent
],
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent implements AfterViewInit {

  receivedTasks: Task[] = [];
  displayedColumns : string[] = [];
  selectedTask?: Task;
  taskOverviewVisibleflag: boolean = false;
  showOptionsFlag: boolean = false;
  sortersAndFiltesTagParent?: string;

  @ViewChild(TaskReminderComponent) letsWatchChild?: TaskReminderComponent

  ngAfterViewInit(){
  }

  showMeTheTextValueOfChild() {
    console.log(this.letsWatchChild?.text)
  }

  constructor(private _dialogManager:DialogService){}

  ngOnInit(): void {
    
  }

  handleUpdatedTasks(tasks:Task[]){
    if ( tasks && tasks.length > 0 ){
      this.receivedTasks = tasks;
      this.setDisplayedColumnsTitles();
    }
    else{
      throw new Error("There are no tasks received by the task table component");
    }
  }

  onTaskClick(value: string, taskFromTable: number){
    this.selectedTask = this.receivedTasks[taskFromTable];
    this._dialogManager.openTaskForm(value, this.selectedTask);
  }

  onAddTaskClick(value:string):void{
    this._dialogManager.openTaskForm(value);
  }

  setDisplayedColumnsTitles(){
      this.displayedColumns = Object.keys(this.receivedTasks[0])
  }

  taskOverviewVisible(){
    if (this.taskOverviewVisibleflag === false)
      this.taskOverviewVisibleflag = true;
    else if (this.taskOverviewVisibleflag === true)
      this.taskOverviewVisibleflag = false;
  }

    showOptions(event: Event):void{
      if (this.showOptionsFlag === false)
      {
        this.showOptionsFlag = true;
        this.sortersAndFiltesTagParent = (event.target as HTMLElement).textContent?.trim();
      }
        
      else if (this.showOptionsFlag === true)
      {
        this.showOptionsFlag = false;
        this.sortersAndFiltesTagParent = (event.target as HTMLElement).textContent?.trim();
      }
        
    }


    
}