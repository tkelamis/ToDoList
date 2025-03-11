import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompletedHighlight]'
})
export class CompletedHighlightDirective {

  isCompleted?: boolean;
  @HostBinding('style.backgroundColor') backgroundColor?:string;
  
  

  @Input() set appCompletedHighlight(isCompleted:boolean){
    this.isCompleted = isCompleted;
  }

  constructor(){
    this.backgroundColor = 'red';
  }
  ngOnChanges() {
    if (this.isCompleted) {
      this.backgroundColor = 'lightgreen';
    } else {
      this.backgroundColor = 'red';
    }
  }

  /* @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';  // Change color on mouse enter
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.isCompleted) {
      this.backgroundColor = 'lightgreen';  // Set to green if completed
    } else {
      this.backgroundColor = 'red';  // Set to red if not completed
    }
  } */
}
