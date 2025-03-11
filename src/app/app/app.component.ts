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
import { CompletedHighlightDirective } from '../directives/completed-highlighted/completed-highlight.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule,
    CommonModule, MatIconModule, TasksComponent, CompletedHighlightDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ToDoList';

  receivedTasks: Task[] = [];

  displayedColumns : string[] = ['name' , 'completed', 'cost', 'date started', 'progress'];

  ngOnInit(): void {
    
  }

  handleUpdatedTasks(tasks:Task[]){
    this.receivedTasks = tasks;
  }
}
