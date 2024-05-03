import { Component, Input, OnInit } from '@angular/core';
import { QuestionServiceService } from '../question-service.service';
import { UserServiceService } from '../user-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.css']
})
export class EndPageComponent implements OnInit {
  correctAnswersCount : number;
  userId!:number;

  constructor(private questionServiceObj :QuestionServiceService,private userServiceObj : UserServiceService) { 
    this.userServiceObj.user.marks = this.questionServiceObj.getCorrectAnswerCount();
    this.correctAnswersCount = this.questionServiceObj.getCorrectAnswerCount();
    this.userId=this.userServiceObj.userid;
    console.log(this.userServiceObj.user)
    localStorage.setItem(`User-${this.userId}`,JSON.stringify(this.userServiceObj.user))
    const userData = localStorage.getItem(`User-${this.userId}`)
    console.log(userData)
    if(userData){
      const userFromStorage = JSON.parse(userData);
      const newUser = new User(userFromStorage);
      this.userServiceObj.users.push(newUser)
      this.userId++;
      this.userServiceObj.userid=this.userId;
    }
    console.log(userServiceObj.users)
  }
  ngOnInit(): void {
  }

}
