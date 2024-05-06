import { Component } from '@angular/core';
import { TodoserviceService } from './todoservice.service';
import { Todo } from './models/todoInterface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-by-using-dummyapi';
  constructor(private todoServiceObj: TodoserviceService) {
    this.todoServiceObj.getTodos().subscribe((todos) => {
      this.todoServiceObj.todos = todos.todos.map((todo: any) => new Todo(todo))
      this.todoServiceObj.todoId = this.todoServiceObj.todos.length;
      this.todoServiceObj.saveInEditTaskSubject();
    });
   } 


    // this.todoServiceObj.todos = this.todos
    // this.todoServiceObj.todoId = this.todoServiceObj.todos.length;
}
