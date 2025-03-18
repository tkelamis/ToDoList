import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTaskHoverHighlight]'
})
export class TaskHoverHighlightDirective {

@HostBinding('style.backgroundColor') backgroundColor?:string; 
@HostBinding('style.transition') transition = 'background-color 0.1s ease-in-out';
@HostBinding('style.cursor') cursor = 'pointer';

  constructor() { }

@HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'gray';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
  }

}
