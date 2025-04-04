import { Task } from './../interfaces/task';
import { AddTaskComponent } from './../tasks/add-task/add-task.component';
import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { EditTaskComponent } from './../tasks/edit-task/edit-task.component';
import { subscribe } from 'diagnostics_channel';
import { DialogRef } from '@angular/cdk/dialog';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public _matDialog: MatDialog) { }


  // lazy loading
  async openTaskForm(value: string, task?: Task){
    let dialogRef

    if (value == "openEditWindow"){
      const { EditTaskComponent } = await import('../tasks/edit-task/edit-task.component');
      dialogRef = this._matDialog.open(EditTaskComponent,{width:'1000px',height:'575px', data:{task}});
    }
    if (value == "openAddWindow"){
      const { AddTaskComponent } = await import('../tasks/add-task/add-task.component');
      dialogRef = this._matDialog.open(AddTaskComponent,{width:'600px',height:'575px'});
    }
    return dialogRef;
  }

  closeDialog(dialogRef: MatDialogRef<any>, task: Task){
    dialogRef.close(task);
  }

  
}
