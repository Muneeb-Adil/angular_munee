import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from './models/todoInterface';

@Injectable({
  providedIn: 'root'
})

export class TodoserviceService {
  todos : Todo[]=[];
  todoId : number|undefined;
  private baseUrl  = 'https://dummyjson.com'
  private editTaskSubject = new BehaviorSubject<any>(null);
  editTaskSubject$ = this.editTaskSubject.asObservable();

  saveInEditTaskSubject() {
    this.editTaskSubject.next(null);
  }



  constructor(private http:HttpClient) { 
  }
  getTodos():Observable<any>{
    return this.http.get(`${this.baseUrl}/todos`)
  }
  editTask(todoId:number,todoText:string,todoStatus:boolean){
    this.todos.map((todo) => {
      if(todo.id == todoId){
        todo.completed=todoStatus;
        todo.todo=todoText
      }
    })

  }
  addNewTask(todoText:string,todoStatus:boolean){
    this.todoId && this.todoId++
    const newtodoId = this.todoId
    const todo = new Todo({
      id: newtodoId,
      todo: todoText,
      completed: todoStatus
    })
    this.todos.push(todo)

  } 
}