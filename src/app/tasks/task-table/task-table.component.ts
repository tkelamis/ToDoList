import { Task, TaskPriority } from './../../interfaces/task';
import { DialogService } from '../../services/dialog.service';
import { MatIconModule } from '@angular/material/icon';
import { PriorityLabelPipePipe } from '../../Pipes/priority-label-pipe.pipe';
import { Component, OnChanges, signal, SimpleChanges } from '@angular/core';
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
import { SorterComponent } from "../../sorters/sorter.component";
import { FilterComponent } from "../../filter/filter.component";
import { TasksService } from '../../services/tasks.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [
    FormsModule, CommonModule,
    MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatNativeDateModule, MatDatepickerModule,
    CompletedHighlightDirective, TaskHoverHighlightDirective,
    PriorityLabelPipePipe,
    TaskOverviewComponent, SorterComponent, FilterComponent
],
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent{
  receivedTasks: Task[] = [];
  displayedColumns : string[] = [];
  selectedTask?: Task;
  taskOverviewVisibleflag = signal(false);
  showOptionFlag = signal(false);
  sortersOrFiltesSelected?: string;

  constructor(private _dialogManager:DialogService, private _tasksManager: TasksService){}


  ngOnInit(): void {
    this._tasksManager.tasks$.subscribe(tasks =>{
      this.receivedTasks = tasks;
    })
    this.setDisplayedColumnsTitles();
  }

  onTaskClick(index: number){
    this._dialogManager.openEditTaskForm(index);
  }

  onAddTaskClick(value:string){
    //this._dialogManager.openTaskForm(value);
  }

  taskOverviewVisible(){
    this.taskOverviewVisibleflag.update((flag) => !flag);
  }

  showOptions(event: Event){
    const selection = (event.target as HTMLElement).textContent?.trim();

    if (this.sortersOrFiltesSelected !== selection){
      this.showOptionFlag.set(true);
    }
    else{
      this.showOptionFlag.update((flag) => !flag);
    }
    this.sortersOrFiltesSelected = selection;
  }

  createDummyTask(): Task {
    return {
      name: 'No tasks available',
      completed: false,
      cost: 0,
      date: new Date(),
      completionPercentage: 0,
      priority: 'Unkown' as TaskPriority
    };
  }

  setDisplayedColumnsTitles(){
    if (this.receivedTasks.length === 0) {
      this.receivedTasks = [this.createDummyTask()];
    }
      this.displayedColumns = Object.keys(this.createDummyTask());
  }
}