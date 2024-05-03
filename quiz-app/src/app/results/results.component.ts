import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private userServiceObj:UserServiceService) { 
    // console.log(userServiceObj.users)
    // for(let i=0;i<userServiceObj.users.length;i++){
    //   console.log(userServiceObj.users[i])
    // }
  }

  ngOnInit(): void {
  }

}
