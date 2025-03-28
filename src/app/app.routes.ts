import { Routes } from '@angular/router';
import { TaskTableComponent } from './tasks/task-table/task-table.component';
import { AboutComponent } from './footer/about/about.component';
import { TaskOverviewComponent } from './tasks/task-overview/task-overview.component';

export const routes: Routes = [
    {path: '', component: TaskTableComponent},

    //EagerLoading
    //{path: 'about', component: AboutComponent}
    //LazyLoading
    {path: 'about',
        loadComponent:() => import("../app/footer/about/about.component").then(c => c.AboutComponent)},

    // {path:'overview',
    //     loadComponent:() => import("../app/tasks/task-overview/task-overview.component").then(c => c.TaskOverviewComponent)}
];
