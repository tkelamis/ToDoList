import { Routes } from '@angular/router';
import { TaskTableComponent } from './tasks/task-table/task-table.component';
import { AboutComponent } from './footer/about/about.component';

export const routes: Routes = [
    {path: '', component: TaskTableComponent},
    {path: 'about', component: AboutComponent}
];
