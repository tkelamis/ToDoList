import { Task } from '../../interfaces/task';
import { DialogService } from '../../services/dialog.service';
import { MatIconModule } from '@angular/material/icon';
import { PriorityLabelPipePipe } from '../../Pipes/priority-label-pipe.pipe';
import { TasksComponent } from '../tasks/tasks.component';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { CompletedHighlightDirective } from '../../directives/completed-highlight.directive';
import { TaskHoverHighlightDirective } from '../../directives/task-hover-highlight.directive'
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';




@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [ 
    MatCardModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    CommonModule, 
    MatIconModule, 
    TasksComponent, 
    CompletedHighlightDirective, 
    PriorityLabelPipePipe, 
    TaskHoverHighlightDirective, 
    MatNativeDateModule, 
    MatDatepickerModule],
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent {
receivedTasks: Task[] = [];

  displayedColumns : string[] = ['name' , 'completed', 'cost', 'date started', 'progress', 'priority'];

  constructor(private _dialogManager:DialogService){}

  ngOnInit(): void {
  }

  handleUpdatedTasks(tasks:Task[]){
    this.receivedTasks = tasks;
  }

  onTaskClick(){
    this._dialogManager.openTaskForm();
  }
}
