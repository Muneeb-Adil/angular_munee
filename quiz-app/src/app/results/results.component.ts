import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../models/user';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  displayedColumns: string[] = ['userId','name', 'email', 'dob', 'marks'];
  users : User[]=[];
  constructor(private userServiceObj:UserServiceService) { 
   
  }

  ngOnInit(): void {
    if(this.userServiceObj.users.length){
      this.users=this.userServiceObj.users
    }
    else{
      let userArray = localStorage.getItem(`Users`)
      this.userServiceObj.users=userArray &&  JSON.parse(userArray)
      this.users=this.userServiceObj.users
      console.log(this.users)
    }
  }

}
