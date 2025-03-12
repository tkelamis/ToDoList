import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTaskHoverHighlight]'
})
export class TaskHoverHighlightDirective {

@HostBinding('style.backgroundColor') backgroundColor?:string; 

  constructor() { }

@HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'gray';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
  }

}
