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
import { TasksService } from '../../services/tasks.service';
import { Observable } from 'rxjs';

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
  taskToEdit$: Observable<Task>;

  constructor(
    private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<EditTaskComponent>, private dialogService: DialogService, private _tasksManager: TasksService,
    @Inject(MAT_DIALOG_DATA) public data: { index: number }
  )
  {
    this.taskToEdit$ = this._tasksManager.getTaskFromTable(this.data.index);
  }

  ngOnInit(): void {
    this.taskToEdit$.subscribe(task =>
      this.myReactiveForm = this._formBuilder.group({
        name:[task.name, [Validators.required]],
        completed:[task.completed,[Validators.required]],
        cost: [task.cost, [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]+)?$')]],
        date: [task.date, [Validators.required]],
        progress:[task.completionPercentage,  [Validators.pattern('^[0-9]{1,2}$')]],
        priority:[task.priority, [Validators.required]]
      }))
  }

  onSubmit() {
    const updatedTask: Task = this.myReactiveForm.value;
    this._tasksManager.updateTask(this.data.index, updatedTask);
    this.dialogService.closeDialog(this.dialogRef)
  }

  closeDialog() {
    this.dialogService.closeDialog(this.dialogRef);
  }
}

