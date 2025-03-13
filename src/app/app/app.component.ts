import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { TaskTableComponent } from '../tasks/task-table/task-table.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    MatCardModule,
    CommonModule, 
    FooterComponent,
    TaskTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'ToDoList';
}
