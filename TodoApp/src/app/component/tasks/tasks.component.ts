import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
import { task } from 'src/app/models/taskdescription';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskArray: task[] = [];
  constructor(private taskService: TaskService,private router: Router) {
    this.taskArray = this.taskService.taskArray;
  }

  ngOnInit(): void {

  }
  createTask():void{
    this.router.navigate(['/edit-task/new']);
  }

  editTask(task: task){
    this.taskService.editTaskSubject.next(task.taskname);
    this.router.navigate(['/edit-task', task.id.toString()]);
  }
}

