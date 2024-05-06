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
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { MatTableModule } from '@angular/material/table';@NgModule({
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
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule, MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
