import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskdetailsComponent } from './component/taskdetails/taskdetails.component';
import { TasksComponent } from './component/tasks/tasks.component';


const routes: Routes = [
  {path:'edit-task/:id',component: TaskdetailsComponent},
  {path:'',component: TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
