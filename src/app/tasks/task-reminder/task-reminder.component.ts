import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-task-reminder',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './task-reminder.component.html',
  styleUrl: './task-reminder.component.css'
})
export class TaskReminderComponent implements OnInit {
  myReactiveForm!: FormGroup;
  text: string = "Kelamis"

  constructor(private _formBuilder: FormBuilder){}

  ngOnInit() {
    this.myReactiveForm = this._formBuilder.group({
      name:['', [Validators.required]]
})
  }



 

  changeValue() {
    console.log(this.text);
    this.text = this.myReactiveForm.value.name;
    console.log(this.text);
  }

}
