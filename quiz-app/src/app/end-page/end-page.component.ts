import { Component, Input, OnInit } from '@angular/core';
import { QuestionServiceService } from '../question-service.service';
import { UserServiceService } from '../user-service.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.css']
})
export class EndPageComponent implements OnInit {
  correctAnswersCount : number;

  constructor(private questionServiceObj :QuestionServiceService,private userServiceObj : UserServiceService,private router:Router) { 
 
    this.correctAnswersCount = this.questionServiceObj.getCorrectAnswerCount();
  }
  ngOnInit(): void {
    if(this.userServiceObj.user && this.userServiceObj.user.name){
      this.userServiceObj.user.marks = this.questionServiceObj.getCorrectAnswerCount();
      this.userServiceObj.users.push(this.userServiceObj.user as User)
    }
    console.log(this.userServiceObj.users)

    let userArray = localStorage.getItem(`Users`)
    if(userArray ){
      localStorage.removeItem(`Users`)
      const existingUsers: User[] = JSON.parse(userArray)
      this.userServiceObj.users= this.userServiceObj.users.concat(existingUsers);
      localStorage.setItem(`Users`,JSON.stringify(this.userServiceObj.users))
      console.log(this.userServiceObj.users)
    }
    else{
      localStorage.setItem(`Users`,JSON.stringify(this.userServiceObj.users))
      console.log(this.userServiceObj.users)
    }
    console.log(this.userServiceObj.users)
  }
  showAllUsersResults(){
    this.router.navigate(['results'])
  }

}
