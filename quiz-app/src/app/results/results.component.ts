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
    this.getUsers(); // Fetch users from backend on component initialization
  }

  getData() {
    this.questionServiceObj.getCategory().subscribe((data: any) => {
      this.category = data["trivia_categories"].map((data: any) => new Category({
        name: data.name,
        id: data.id
      }));
    });
  }

  getUsers() {
    this.userServiceObj.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error) => {
        console.error('Error fetching users:', error);
        // Handle error as needed
      }
    );
  }

  filterUsersByCategory() {
    console.log(this.users);
    return !this.selectedCategory || this.selectedCategory === 'All' ? 
    this.users : 
    this.users.filter(user => user.attemptedQuizCategory === this.selectedCategory);
  }
}
