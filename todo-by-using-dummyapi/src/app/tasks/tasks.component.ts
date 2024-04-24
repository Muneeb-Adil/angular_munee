import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todoInterface';
import { TodoserviceService } from '../todoservice.service';
import { filter } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  todos : Todo[]=[];
  unfinishedTodoImageUrl :string = '../../assets/unfinished.png';
  finishedTodoImageUrl : string = '../../assets/complete.png'


  constructor(private todoServiceObj : TodoserviceService,private router: Router) { }

  ngOnInit(): void {
    this.todoServiceObj.getTodos().subscribe((todos)=>{
      this.todos = todos.todos.map((todo: any) => new Todo(todo))
    })
  }
  changeTodoStatus(todo : Todo):void{
    todo.completed = !todo.completed;
    this.finishedTodoImageUrl = '../../assets/unfinished.png';
    this.unfinishedTodoImageUrl = '../../assets/finished.png';
  }
  deleteTodo(mytodo  :Todo):void{
    this.todos  = this.todos.filter(todo=>todo.id !=mytodo.id)
  }

  createTask():void{
    this.router.navigate(['/edit-task/new']);
  }
  editTask(mytodo : Todo):void{
    this.todoServiceObj.editTaskSubject.next(mytodo);
    this.router.navigate(['/edit-task',mytodo.id.toString()]);
  }
}