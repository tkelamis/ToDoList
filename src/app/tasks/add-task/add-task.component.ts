import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; // Material Form Field
import { MatInputModule } from '@angular/material/input'; // Material Input Field

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {

  myReactiveForm!: FormGroup

  constructor(private _formBuilder: FormBuilder){}



  ngOnInit(): void {
    this.myReactiveForm = this._formBuilder.group({
      name:['', [Validators.required]],
      cost: ['', [Validators.required]],
      date: ['', [Validators.required]],
      completionPercentage: ['', [Validators.required]],
      priority:['', [Validators.required]]
    });
  }
  
}
