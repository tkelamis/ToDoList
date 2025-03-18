import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-filters',
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit {
  
  @Input() filterList?:Task[];

  ngOnInit(): void {
    console.log(this.filterList)
  }
}
