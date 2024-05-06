import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    date_of_birth: new FormControl('')
  })
  constructor(private router: Router,private userServiceObj:UserServiceService) { }

  ngOnInit(): void {
  }
  

  userLogin() {
    if (this.loginForm.valid) {
      this.userServiceObj.user.name = this.loginForm.get('username')?.value as string,
      this.userServiceObj.user.email =  this.loginForm.get('email')?.value as string,
      this.userServiceObj.user.date_of_birth = new Date(this.loginForm.get('date_of_birth')?.value as string)
      this.router.navigate(['rules'])
    }
  }
  showAllUsersResults(){
    this.router.navigate(['results'])
  }

}
