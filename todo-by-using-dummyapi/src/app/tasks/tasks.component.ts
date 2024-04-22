import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todoInterface';
import { TodoserviceService } from '../todoservice.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  todos : Todo[]=[];

  constructor(private todoServiceObj : TodoserviceService ) { }

  ngOnInit(): void {
    this.todoServiceObj.getTodos().subscribe((todos)=>{
      this.todos = todos.todos.map((todo: any) => new Todo(todo))
    })
  }
  // comment added
}