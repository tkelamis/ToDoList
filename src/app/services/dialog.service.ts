import { AddTaskComponent } from './../tasks/add-task/add-task.component';
import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { EditTaskComponent } from './../tasks/edit-task/edit-task.component';
import { Task } from '../interfaces/task';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public _matDialog: MatDialog) { }


  // lazy loading
  async openTaskForm(value: string, task?: Task){
    if (value == "openEditWindow"){
      const { EditTaskComponent } = await import('../tasks/edit-task/edit-task.component')
      this._matDialog.open(EditTaskComponent,{width:'1000px',height:'575px', data:{task}})
    }
    if (value == "openAddWindow"){
      const { AddTaskComponent } = await import('../tasks/add-task/add-task.component')
      this._matDialog.open(AddTaskComponent,{width:'600px',height:'575px'})
    }
  }
}
