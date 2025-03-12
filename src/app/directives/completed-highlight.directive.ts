import { Directive, Input, HostBinding } from '@angular/core';

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
}
