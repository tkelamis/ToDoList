import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { AddTaskComponent } from '../tasks/add-task/add-task.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public _matDialog: MatDialog) { }

  openTaskForm(){
    this._matDialog.open(AddTaskComponent,{width:'700px',height:'575px'})
  }
}
