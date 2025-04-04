import { DialogRef } from '@angular/cdk/dialog';
import { DialogService } from './../../services/dialog.service';
import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task, TaskPriority } from '../../interfaces/task';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgIf, NgClass } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-edit-task',
  imports: [ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule,
    NgIf, NgClass],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  myReactiveForm!: FormGroup;
  priorityLevels:string[] = Object.keys(TaskPriority);
  receivedTask?: Task;

  constructor(
    private _formBuilder: FormBuilder, 
    private dialogRef: MatDialogRef<EditTaskComponent>, 
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ){
    this.receivedTask = this.data.task;
  }

  ngOnInit(): void {
    this.myReactiveForm = this._formBuilder.group({
      name:[this.receivedTask?.name, [Validators.required]],
      completed:[this.receivedTask?.completed,[Validators.required]],
      cost: [this.receivedTask?.cost, [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]+)?$')]],
      date: [this.receivedTask?.date, [Validators.required]],
      progress:[this.receivedTask?.completionPercentage,  [Validators.pattern('^[0-9]{1,2}$')]],
      priority:[this.receivedTask?.priority, [Validators.required]]
    });
  }

  onSubmit() {
    const editedTask: Task = this.myReactiveForm.value;
    this.dialogService.closeDialog(this.dialogRef, editedTask);
    console.log(editedTask);
  }

  closeDialog() {
    this.dialogService.closeDialog(this.dialogRef, this.myReactiveForm.value);
    console.log(this.myReactiveForm.value)
  }
}

