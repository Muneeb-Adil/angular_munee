import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../models/question'
import { QuestionServiceService } from '../question-service.service';

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


  constructor(private router: Router, private questionServiceObj: QuestionServiceService) {
    this.time = 5 * 60 * 1000;
    this.minutes = 0;
    this.seconds = 0;
    this.startTime = this.formatTime(this.minutes, this.seconds)
  }

  ngOnInit(): void {
    this.getData();
    setTimeout(() => {
      this.showResult();
    }, this.time);

    setInterval(() => {
      this.updateTime();
    }, 1000);
  }


  getData() {
    this.questionServiceObj.getQuestions().subscribe(data => {
      this.questions = data; // Assign fetched data to the array
      this.copyDataToMyQuestions();
    });
  }
  copyDataToMyQuestions() {
    this.myQuestions = this.questions.map((question) => {
      const answers = [question.correct_answer, ...question.incorrect_answers]
      const random_answers: any[] = [];
      for (let i = 0; i < answers.length; i++) {
        let flag = false
        while (flag != true) {
          const num = this.reGenerate();
          if (!(random_answers.includes(answers[num]))) {
            random_answers.push(answers[num])
            flag = true
          }
        }
      }
      return {
        answers: random_answers,
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

  showResult() {
    this.router.navigate(['end-page'])
  }
  formatTime(minutes: number, seconds: number): string {
    return `${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
  }
  padNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

}
