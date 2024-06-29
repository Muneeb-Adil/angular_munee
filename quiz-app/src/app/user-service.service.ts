import { Injectable } from '@angular/core';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = 'http://localhost:8000/api/users'; // Adjust to match your backend API URL

  users : User[]=[];
  user = new User('');
  constructor(private http: HttpClient) {
  }
  storeUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, user);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }
}
