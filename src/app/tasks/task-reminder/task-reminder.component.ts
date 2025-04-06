import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Task } from '../../interfaces/task';
import { NgFor } from '@angular/common';
import { TaskOverviewComponent } from '../task-overview/task-overview.component';
import { errorMonitor } from 'node:events';
import { error } from 'node:console';

@Component({
  selector: 'app-task-reminder',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule,NgFor],
  templateUrl: './task-reminder.component.html',
  styleUrl: './task-reminder.component.css'
})
export class TaskReminderComponent implements OnChanges {

  @Input({required: true}) receivedList: Task[]=[];
  @Output() remindersFound = new EventEmitter<Task[]>();
  tasksListToRemind: Task[]=[];

  constructor(){
  }
  
  ngOnChanges(changes: SimpleChanges ): void {
    if(this.receivedList){
      this.tasksListToRemind = this.receivedList.filter(task => task.forReminder == true);

      this.remindersFound.emit(this.tasksListToRemind)
    }
    else
    throw new Error("The received list from parent is undefined");

    console.log(changes)
  }
}
