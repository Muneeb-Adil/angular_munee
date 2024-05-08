import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/user';
import { UserServiceService } from '../user-service.service';
import { QuestionServiceService } from '../question-service.service';
import { Category } from '../models/category';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  category:Category[]=[]
  loginForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    date_of_birth: new FormControl(''),
    categoryId: new FormControl('')
  })
  constructor(private router: Router, private userServiceObj: UserServiceService,private questionServiceObj : QuestionServiceService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.questionServiceObj.getCategory().subscribe((data: any) => {
      this.category = data["trivia_categories"].map((data: any)=>{
        return{name:data.name,
        id:data.id
      }
    })

    });
  }


  userLogin() {
    let dateArray, date,quizId:any,item:Category[];
    if (this.loginForm.valid) {
      this.userServiceObj.user.name = this.loginForm.get('username')?.value as string,
      this.userServiceObj.user.email = this.loginForm.get('email')?.value as string,
      dateArray = (this.loginForm.get('date_of_birth')?.value as string).split('-')
      date = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0]
      this.userServiceObj.user.date_of_birth = date,
      quizId = this.loginForm.get('categoryId')?.value as string
      item= this.category.filter((item)=>item.id===Number(quizId))
      this.userServiceObj.user.attemptedQuizCategory=item[0].name
      this.questionServiceObj.quizCategory=item[0].id
      this.router.navigate(['rules'])
    }
  }
  showAllUsersResults() {
    this.router.navigate(['results'])
  }

}
