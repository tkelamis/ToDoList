import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button,[appClickDisabled]'
})
export class ClickDisabledDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    // Change the cursor to 'not-allowed' when mouse enters the element (hover effect)
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'not-allowed');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Reset the cursor style when the mouse leaves the element
    this.renderer.removeStyle(this.el.nativeElement, 'cursor');
  }
}
