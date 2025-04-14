import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child-ng',
  imports: [NgTemplateOutlet ],
  templateUrl: './child-ng.component.html',
  styleUrl: './child-ng.component.css'
})
export class ChildNgComponent {
  @Input() receivedDivFromParent!: TemplateRef<any>

}
