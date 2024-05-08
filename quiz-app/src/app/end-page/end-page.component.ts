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
    
    let userArray = localStorage.getItem(`Users`)
    let existingUsers:User[]=[];
    if(userArray ){
      localStorage.removeItem(`Users`)
      existingUsers = JSON.parse(userArray)
      this.userServiceObj.users=existingUsers
    }
    
   
    if (this.userServiceObj.user.name && this.userServiceObj.user.visited == undefined) {
      this.userServiceObj.user.marks = this.questionServiceObj.getCorrectAnswerCount();
      this.userServiceObj.user.visited=true
      if(userArray){
        this.userServiceObj.user.userId=existingUsers.length;
      }
      else{
        this.userServiceObj.user.userId=0;
      }
      this.userServiceObj.users.push(this.userServiceObj.user as User);
      
    }
    localStorage.setItem(`Users`, JSON.stringify(this.userServiceObj.users));

  
    
  }
  showAllUsersResults(){
    this.router.navigate(['results'])
  }
}
