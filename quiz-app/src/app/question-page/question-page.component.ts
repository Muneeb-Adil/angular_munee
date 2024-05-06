import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../models/question'
import { QuestionServiceService } from '../question-service.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {
  time: number;
  startTime: string;
  minutes: number;
  seconds: number;
  questions: Question[] = [];
  myQuestions: any;
  correctAnswersCount = 0
  currentQuestionIndex: number = 0



  constructor(private router: Router, private questionServiceObj: QuestionServiceService) {
    this.time = 2 * 60 * 1000;
    this.minutes = 0;
    this.seconds = 0;
    this.startTime = this.formatTime(this.minutes, this.seconds)
  }

  ngOnInit(): void {
    this.getData();
    setTimeout(() => {
      this.router.navigate(['end-page'])
    }, this.time);

    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  receiveAnswer(question: string,answer:any) {
    let index = this.questions.findIndex((x: { question: string; })=>x.question==question)
    console.log(this.questions[index].correct_answer)
    if(answer.answer==this.questions[index].correct_answer){
      this.correctAnswersCount += 1
  
    }
    this.goToNextQuestion();
  }

  goToNextQuestion() { 
    this.questionServiceObj.correctAnswersCount=this.correctAnswersCount
    if(this.currentQuestionIndex < this.myQuestions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  getData() {
    this.questionServiceObj.getQuestions().subscribe(data => {
      this.questions = data; 
      this.copyDataToMyQuestions();
    });
  }
  copyDataToMyQuestions() {
    this.myQuestions = this.questions.map((question) => {
      const answers = question.incorrect_answers
      const num = this.reGenerate();
      answers.splice(num, 0, question.correct_answer)
      return {
        answers: answers,
        question: question.question
      }
    })
  }
  reGenerate(): number {
    return Math.floor(Math.random() * 4)
  }

  updateTime(): void {
    if (this.seconds < 59) {
      this.seconds += 1;
    } else {
      this.minutes += 1;
      this.seconds = 0;
    }
    this.startTime = this.formatTime(this.minutes, this.seconds);
  }

  formatTime(minutes: number, seconds: number): string {
    return `${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
  }
  padNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

}
