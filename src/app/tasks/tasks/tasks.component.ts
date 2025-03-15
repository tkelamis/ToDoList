import { TaskPriority } from './../../interfaces/task';
import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../interfaces/task';
import { UpperCasePipe } from '@angular/common';



@Component({
  selector: 'app-tasks',
  imports: [],
  providers: [UpperCasePipe],
  templateUrl: 'tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [
    { name: 'tsimaras', completed: true, cost: 0, date: new Date('2025-03-11'), completionPercentage: 50, priority: TaskPriority.High },
    { name: 'kelamis', completed: false, cost:553.458, date: new Date('2025-02-11'), completionPercentage: 20, priority: TaskPriority.Unknown }
  ]

  // Input properties examples
  // @Input({
  //   required: true, 
  //   transform: (value: string) => value.toUpperCase()
  // }) childValue = '';

  @Output() tasksUpdated = new EventEmitter<Task[]>();

  constructor(private uppercasePipe: UpperCasePipe){}

  ngOnInit(): void {
    this.sendTasks();
  }

  sendTasks() {
    this.tasksUpdated.emit(this.tasks);
  }

}
// {
//   tasks: Task[] = [
//     { name: 'tsimaras', completed: true, cost: 0, date: new Date('2025-03-11'), completionPercentage: 0.50, priority: TaskPriority.High },
//     { name: 'kelamis', completed: false, cost:553.458, date: new Date('2025-02-11'), completionPercentage: 0.20, priority: TaskPriority.Unknown }
//   ]

//   // private _practiceChild:string = '';

//   // @Input() 
//   // set practiceChild(value:string){
//   //   this._practiceChild = this.toUpperCase(value);
//   // }
//   // get practiceChild():string{
//   //   return this._practiceChild;
//   // }



//   // @Output() tasksUpdated = new EventEmitter<Task[]>();

//   ngOnInit(): void {
    
//     this.sendTasks();
//     // console.log(this.practiceChild);
//   }

//   sendTasks() {
//     this.tasksUpdated.emit(this.tasks);
//   }

//   // private toUpperCase(value: string | undefined): string {
//   //   return value?.toUpperCase() ?? '';
//   // }
// }
