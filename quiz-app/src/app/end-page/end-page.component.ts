import { Component, Input, OnInit} from '@angular/core';
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
    this.storeUserData();
  }

  storeUserData(): void {
    if (this.userServiceObj.user.name && !this.userServiceObj.user.visited) {
      this.userServiceObj.user.marks = this.correctAnswersCount;
      this.userServiceObj.user.visited = true;

      this.userServiceObj.storeUser(this.userServiceObj.user)
        .subscribe(
          (response) => {
            console.log('User stored successfully:', response);
            this.userServiceObj.user = response; // Optionally update user object with response from server
          },
          (error) => {
            console.error('Error storing user:', error);
          }
        );
    }
  }

  showAllUsersResults() {
    this.router.navigate(['results']);
  }
}