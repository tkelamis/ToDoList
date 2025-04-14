import { NgIf } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ChildNgComponent } from "../child-ng/child-ng.component";

@Component({
  selector: 'app-parent-ng',
  imports: [NgIf],
  templateUrl: './parent-ng.component.html',
  styleUrl: './parent-ng.component.css'
})

export class ParentNgComponent implements OnInit {
  
  thenBlock: TemplateRef<any>| null = null;
  show = true;

  showChildComponent: boolean = true;
  @ViewChild('primaryBlock', {static: true}) primaryBlock: TemplateRef<any>| null = null;
  @ViewChild('secondaryBlock', {static: true}) secondaryBlock: TemplateRef<any>| null = null;


  switchPrimary() {
    this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock;
  }

  ngOnInit(): void {
    this.thenBlock = this.primaryBlock;
    }
}
  

//   async getTodos(): Promise<string[]> {
//     const todos = ['Buy milk', 'Study Angular', 'Walk dog'];
//     return todos;
//   }

//   async showTodos() {
//     const todos: Todos = await this.getTodos();
//     console.log(todos); // ['Buy milk', 'Study Angular', 'Walk dog']
//   }
// }
// type Todos = Awaited<ReturnType<typeof ParentNgComponent.prototype.getTodos>>;


  


//   toggleFlag() {
//     if(this.showChildComponent === true){
//       this.showChildComponent = false;
//     }
//     else{
//       this.showChildComponent = true;
//     }
//   }

//   showValue() {
    
//     let variable = 1;
    
//     if(variable==1){
//       let variable = 2;
//       console.log(variable)
//     }

//     console.log(variable)

//     const message = `This is
// a multi-line 
// string.`;

// console.log(message);
//   }
