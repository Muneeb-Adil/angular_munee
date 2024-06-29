import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path:'edit-task/:id',component:TaskdetailsComponent},
  {path:'',component:TasksComponent},
  {path:'save-task',component:TaskdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
