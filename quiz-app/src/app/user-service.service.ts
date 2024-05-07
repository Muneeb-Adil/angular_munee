import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users : User[]=[];
  user = new User('');
  constructor() {
   }
}
