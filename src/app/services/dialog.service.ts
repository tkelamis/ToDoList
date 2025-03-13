import { AddTaskComponent } from './../tasks/add-task/add-task.component';
import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public _matDialog: MatDialog) { }


  // lazy loading
  async openTaskForm(){
    const { AddTaskComponent } = await import('../tasks/add-task/add-task.component')
    this._matDialog.open(AddTaskComponent,{width:'700px',height:'575px'})
  }

}
