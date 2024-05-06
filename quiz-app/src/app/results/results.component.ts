import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../models/user';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'dob', 'marks'];
  users : User[]=[];
  constructor(private userServiceObj:UserServiceService) { 
   
  }

  ngOnInit(): void {
    this.users=this.userServiceObj.users
    // let userArray = localStorage.getItem(`Users`)
    
    // if(userArray && this.userServiceObj.users.length===0){
    //   this.userServiceObj.users=  JSON.parse(userArray)
    //   this.users = this.userServiceObj.users
    // }
    // else{
    //   this.users = this.userServiceObj.users
    // }
  }

}
