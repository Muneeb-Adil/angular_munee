import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoserviceService } from '../todoservice.service';
import { Todo } from '../models/todoInterface';
import { FormControl,ReactiveFormsModule,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {
  todoForm: FormGroup = new FormGroup({
    todoText: new FormControl('',Validators.required),
    todoStatus: new FormControl(false)
  })
  // myText = new FormControl('Angular 7')
  // todoText :string = ""
  // todoStatus  : boolean = false
  todoId : string ="";
  constructor(private router : Router,private route  :ActivatedRoute,private todoServiceObj : TodoserviceService) { 
  }

  ngOnInit(): void {
    this.todoId = this.route.snapshot.params['id']
    if(this.todoId !== 'new' ){
      const todo = this.todoServiceObj.todos.filter(todo=>todo.id==parseInt(this.todoId))
      this.todoForm.patchValue({
        todoText:todo[0].todo,
        todoStatus:todo[0].completed
      })
      // this.todoText = todo[0].todo;
      // this.todoStatus = todo[0].completed;
    }
  }

  saveTask(){
    const todoText = this.todoForm.get('todoText')!.value;
    const todoStatus = this.todoForm.get('todoStatus')!.value;
   if(this.todoId !== 'new'){
     this.todoServiceObj.editTask(parseInt(this.todoId),todoText,todoStatus)
     this.router.navigate(['/']);
   }
   else{
    this.todoServiceObj.addNewTask(todoText,todoStatus)
    this.router.navigate(['/']);
   }
  }


  // setDefaultValue(){
  //   console.log(this.myText.value)
  //   this.myText.setValue('Angular 8')

  // }
  onSubmit(){
    console.log(this.todoForm.value);
    console.log(this.todoForm.controls['todoText'].value)

  }

}
