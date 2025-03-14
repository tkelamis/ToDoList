import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClickDisabledDirective } from '../../click-disabled.directive';

@Component({
  selector: 'app-about',
  imports: [RouterLink, ClickDisabledDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
