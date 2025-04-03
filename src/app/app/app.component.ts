import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    MatCardModule,
    CommonModule, 
    FooterComponent,
    RouterOutlet
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'ToDoList';
  

  ngOnInit(): void {
  }


  //example of ChangeDetectorRef usage and how to toggle on/off the change detection cycle
  
  /* vari = "Kelamis";
  constructor(private cdr: ChangeDetectorRef){
  }
  
  
  ngOnInit(): void {
    this.cdr.detectChanges();
    this.cdr.detach();
  }


  changeName() {
    this.vari = 'Elanio';
    this.cdr.detectChanges();
    } */
}
