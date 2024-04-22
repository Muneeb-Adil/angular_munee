import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  //Injecting a variable in dom
  // title = "Todos";

  constructor() { }

  ngOnInit(): void {
    // this.todos.push(new Todo({content: 'Hello', completed: false}))
  }

}
