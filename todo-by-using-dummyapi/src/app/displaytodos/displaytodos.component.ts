import {Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Todo } from '../models/todoInterface';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-displaytodos',
  templateUrl: './displaytodos.component.html',
  styleUrls: ['./displaytodos.component.css']
})
export class DisplaytodosComponent implements OnInit {
  @Input() todos : Todo[]=[];
  @Output() changeTodoStatusemitter= new EventEmitter();
  @Output() editTaskEmitter = new EventEmitter();
  @Output() deleteTaskemitter = new EventEmitter();


  displayedColumns: string[] = ['id','todo', 'status'];
  dataSource!: MatTableDataSource<Todo>; // Define MatTableDataSource

  constructor( ) { 
    this.dataSource = new MatTableDataSource<Todo>([]);
    console.log(this.dataSource)
  }

  ngOnInit(): void {
    if (this.todos && this.todos.length > 0) {
      this.dataSource.data = this.todos;
      
    }
  }

  changeTodoStatus(todo: Todo) {
    this.changeTodoStatusemitter.emit(todo);
  }
  editTask(todo : Todo){
    this.editTaskEmitter.emit(todo);
  }
  deleteTodo(todo : Todo){
    this.deleteTaskemitter.emit(todo);
  }

}
