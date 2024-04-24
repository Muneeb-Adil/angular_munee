import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {
  todoText :string = ""
  todoStatus  : string =""
  todoId :number | undefined;
  constructor(private router : Router,private route  :ActivatedRoute,private todoServiceObj : TodoserviceService) { 
    this.todoServiceObj.editTaskSubject.subscribe({
            next: (mytodo) => {
              if(this.route.snapshot.params['id'] !== 'new') {
                this.todoText= mytodo.todo
                this.todoStatus = mytodo.completed
                this.todoId=mytodo.id
              }
            }
          })
  }

  ngOnInit(): void {
  }
  saveTask(todoText:string, todoStatus:string){}
  editTask(todoId:any ,todoText:string, todoStatus:string){}

}
 
//     this.taskService.editTaskSubject.subscribe({
//       next: (task) => {
//         if(this.route.snapshot.params['id'] !== 'new') {
//           this.tasktext = task;
//         }
//       }
//     })
//   }
//   ngOnInit(): void {
//   }

//   saveTask(tasktext: string) {
//     const checkId = this.route.snapshot.params['id']
//      // if params !== new ,call editTask
//     if(checkId !== 'new'){
//       this.taskService.editOldTask({id :checkId,taskname:tasktext})
//       this.router.navigate(['/']);
//     }
//       // else call newTask
//     else{
//       this.taskService.addNewTask(tasktext)
//       this.router.navigate(['/']);
//     }
//   }
// }
