import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Task } from '../../interfaces/task';
import { NgFor } from '@angular/common';
import { TaskOverviewComponent } from '../task-overview/task-overview.component';

@Component({
  selector: 'app-task-reminder',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule,NgFor],
  templateUrl: './task-reminder.component.html',
  styleUrl: './task-reminder.component.css'
})
export class TaskReminderComponent implements OnChanges {

  @Input({required: true}) receivedList: Task[]=[];
  tasksListToRemind: Task[]=[];
  @Output() remindersFound = new EventEmitter<Task[]>();

  constructor(){
  }
  
  
  ngOnChanges(): void {
    if(this.receivedList){
      this.receivedList.forEach(task =>{
        if(task.forReminder === true){
          this.tasksListToRemind.push(task)
        }
      })

      this.remindersFound.emit(this.tasksListToRemind)
    }
  }
}
