import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from './models/todoInterface';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  private baseUrl  = 'https://dummyjson.com'

  constructor(private http:HttpClient) { 
  }
  getTodos():Observable<any>{
    return this.http.get(`${this.baseUrl}/todos`)
  }
}
