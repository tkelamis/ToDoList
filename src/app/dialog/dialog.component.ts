import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { AddTaskComponent } from '../tasks/add-task/add-task.component';
import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-dialog',
  imports: [MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  constructor(public _matDialog: MatDialog) { }

  openTaskForm(){
    this._matDialog.open(AddTaskComponent,{width:'400px',height:'475px'})
  }
  
  
}
