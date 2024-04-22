import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {
  tasktext: string = '';

  constructor(private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.taskService.editTaskSubject.subscribe({
      next: (task) => {
        if(this.route.snapshot.params['id'] !== 'new') {
          this.tasktext = task;
        }
      }
    })
  }
  ngOnInit(): void {
  }

  saveTask(tasktext: string) {
    const checkId = this.route.snapshot.params['id']
     // if params !== new ,call editTask
    if(checkId !== 'new'){
      this.taskService.editOldTask({id :checkId,taskname:tasktext})
      this.router.navigate(['/']);
    }
      // else call newTask
    else{
      this.taskService.addNewTask(tasktext)
      this.router.navigate(['/']);
    }
  }
}
