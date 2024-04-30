import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rules-page',
  templateUrl: './rules-page.component.html',
  styleUrls: ['./rules-page.component.css']
})
export class RulesPageComponent implements OnInit {
  rules = ['All the questiions are mandatory to attempt', 'Once you selected the option you do not have a chance to unmark it','You have 5 minutes to attempt this quiz so please submit it before the time ends']
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToStartPage(){
    this.router.navigate(['/'])
  }
  goToAttemptQuiz(){
    this.router.navigate(['question-page'])
  }

}
