import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { TaskPriority } from '../../../interfaces/task';


@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, NgFor,],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {

  myReactiveForm!: FormGroup
  priorityLevels = ['Low', 'Medium', 'High'];
  constructor(private _formBuilder: FormBuilder){}



  ngOnInit(): void {
    this.myReactiveForm = this._formBuilder.group({
      name:['', [Validators.required]],
      cost: ['', [Validators.required]],
      date: ['', [Validators.required]],
      completionPercentage: ['', [Validators.required]],
      priority:['', [Validators.required]]
    });


    console.log(this.priorityLevels);
  }
  
}
