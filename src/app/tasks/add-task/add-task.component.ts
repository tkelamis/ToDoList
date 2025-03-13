import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  imports: [
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule, 
    NgFor, NgIf, NgClass],
  standalone:true,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {

  myReactiveForm!: FormGroup
  priorityLevels = ['Unknown', 'Low', 'Medium', 'High'];

  constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddTaskComponent>){}

  ngOnInit(): void {
    this.myReactiveForm = this._formBuilder.group({
      name:['', [Validators.required]],
      cost: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      date: ['', [Validators.required]],
      priority:['', [Validators.required]]
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
