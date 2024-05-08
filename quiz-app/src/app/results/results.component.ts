import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../models/user';
import { QuestionServiceService } from '../question-service.service';
import { Category } from '../models/category';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  selectedCategory:any;
  category:Category[]=[]
  displayedColumns: string[] = ['userId','name', 'email', 'dob', 'marks','quizCategory'];
  users : User[]=[];
  constructor(private userServiceObj:UserServiceService,private questionServiceObj:QuestionServiceService) { 
   
  }
 
 
  ngOnInit(): void {
    this.getData();
    if(this.userServiceObj.users.length){
      this.users=this.userServiceObj.users
    }
    else{
      let userArray = localStorage.getItem(`Users`)
      this.userServiceObj.users=userArray &&  JSON.parse(userArray)
      this.users=this.userServiceObj.users
    }
  }
  getData() {
    this.questionServiceObj.getCategory().subscribe((data: any) => {
      this.category = data["trivia_categories"].map((data: any)=>{
        return new Category({name:data.name,
        id:data.id
      })
    })
    });
  }
  filterUsersByCategory(){
    return !this.selectedCategory || this.selectedCategory==='All'? this.users: this.users.filter(user => user.attemptedQuizCategory === this.selectedCategory);
  }
  // checkCategory(quizCategory){
  //   return this.users.filter(user=>user.quizCategory)

  // }

}
