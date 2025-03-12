import { Component, OnInit, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../../interfaces/task';
import { TasksComponent } from '../tasks/tasks.component';
import { CompletedHighlightDirective } from '../directives/completed-highlight.directive';
import { PriorityLabelPipePipe } from '../Pipes/priority-label-pipe.pipe';
import { TaskHoverHighlightDirective } from '../directives/task-hover-highlight.directive'
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { DialogService } from '../services/dialog.service';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule,
    CommonModule, MatIconModule, TasksComponent, CompletedHighlightDirective, PriorityLabelPipePipe, TaskHoverHighlightDirective, MatNativeDateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ToDoList';

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
