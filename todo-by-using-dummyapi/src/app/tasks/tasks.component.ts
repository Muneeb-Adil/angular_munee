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
  completeTodos : Todo[]=[];
  notCompletedTodos : Todo[]=[];
  // displayTodos : Todo[]=[];
  unfinishedTodoImageUrl :string = '../../assets/unfinished.png';
  finishedTodoImageUrl : string = '../../assets/complete.png'


  constructor(private todoServiceObj : TodoserviceService,private router: Router) {
    this.todoServiceObj.editTaskSubject$.subscribe({
      next: () => {
        this.todos = this.todoServiceObj.todos
        this.todos.forEach(todo=>{
          todo.completed? this.completeTodos.push(todo): this.notCompletedTodos.push(todo)
        })
        // this.displayTodos = [ ...this.completeTodos, ...this.notCompletedTodos];
      }
    })
   }

  ngOnInit(): void {
    this.todos = this.todoServiceObj.todos
    
  }
  changeTodoStatus(todo : Todo):void{
    const todoIndex = this.todos.findIndex(mytodo => mytodo.id === todo.id);

    if (todoIndex !== -1) {
        // Toggle the 'completed' status of the todo item
        this.todos[todoIndex].completed = !this.todos[todoIndex].completed;

        // Move the todo item between 'completeTodos' and 'notCompletedTodos' arrays
        if (this.todos[todoIndex].completed) {
            // Move the todo item from 'notCompletedTodos' to 'completeTodos'
            this.completeTodos.push(this.todos[todoIndex]);
            this.notCompletedTodos = this.notCompletedTodos.filter(mytodo => mytodo.id !== todo.id);
        } else {
            // Move the todo item from 'completeTodos' to 'notCompletedTodos'
            this.notCompletedTodos.push(this.todos[todoIndex]);
            this.completeTodos = this.completeTodos.filter(mytodo => mytodo.id !== todo.id);
        }
    // this.displayTodos = [ ...this.completeTodos, ...this.notCompletedTodos];
    this.finishedTodoImageUrl = '../../assets/unfinished.png';
    this.unfinishedTodoImageUrl = '../../assets/finished.png';
  }
}

  deleteTodo(mytodo  :Todo):void{
    this.todos  = this.todos.filter(todo=>todo.id !=mytodo.id)
    if(mytodo.completed){
      this.completeTodos = this.completeTodos.filter(todo=>todo.id!==mytodo.id);
    }
    else{
      this.notCompletedTodos = this.notCompletedTodos.filter(todo=>todo.id!==mytodo.id);
    }
    // this.displayTodos = [ ...this.completeTodos, ...this.notCompletedTodos];
  }

  createTask():void{
    this.router.navigate(['/edit-task/new']);
  }
  editTask(mytodo : Todo):void{
    this.router.navigate(['/edit-task',mytodo.id.toString()]);
  }
}