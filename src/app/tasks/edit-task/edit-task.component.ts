import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task, TaskPriority } from '../../interfaces/task';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgFor, NgIf, NgClass, PercentPipe } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-edit-task',
  imports: [ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule,
    NgFor, NgIf, NgClass],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  myReactiveForm!: FormGroup;
  priorityLevels:string[] = Object.keys(TaskPriority);
  receivedTask?: Task;

  constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<EditTaskComponent>, @Inject(MAT_DIALOG_DATA) public data: { task: Task }){
  }

  ngOnInit(): void {
    this.receivedTask = this.data.task;

    this.myReactiveForm = this._formBuilder.group({
      name:[this.receivedTask?.name, [Validators.required]],
      completed:[this.receivedTask?.completed,[Validators.required]],
      cost: [this.receivedTask?.cost, [Validators.required, Validators.pattern('^[0-9]*$')]],
      date: [this.receivedTask?.date, [Validators.required]],
      progress:[this.receivedTask?.completionPercentage],
      priority:[this.receivedTask?.priority, [Validators.required]]
    });
  }

  ngAfterViewInit(): void {
    // Update value and validity after the view has initialized
    this.myReactiveForm.updateValueAndValidity();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

