import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { TasksService } from './tasks.service';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public _matDialog: MatDialog, private _tasksManager:TasksService) { }

// lazy loading
  async openEditTaskForm(index: number){
    const { EditTaskComponent } = await import('../tasks/edit-task/edit-task.component');
    this._matDialog.open(EditTaskComponent,{width:'1000px',height:'575px', data:{index}});
  }

  async openAddTaskForm(index: number){
    let dialogRef;
    const { AddTaskComponent } = await import('../tasks/add-task/add-task.component');
    dialogRef = this._matDialog.open(AddTaskComponent,{width:'600px',height:'575px'});
  }

  closeDialog(dialogRef: MatDialogRef<any>){
    dialogRef.close();
  }
}
