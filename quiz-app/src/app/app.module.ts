import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { RulesPageComponent } from './rules-page/rules-page.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { EndPageComponent } from './end-page/end-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayEachQuestionComponent } from './display-each-question/display-each-question.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    RulesPageComponent,
    QuestionPageComponent,
    EndPageComponent,
    DisplayEachQuestionComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
