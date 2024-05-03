import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesPageComponent } from './rules-page/rules-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { EndPageComponent } from './end-page/end-page.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path:'rules',component:RulesPageComponent},
  {path:'',component:StartPageComponent},
  {path:'question-page',component:QuestionPageComponent},
  {path:'end-page',component:EndPageComponent},
  {path:'results',component:ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
