import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { task } from '../models/taskdescription';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  id: number = 4;
  taskArray: task[] = [{id: 1,taskname :"Organize party"},{id:2,taskname :"Make Lunch"},{id:3,taskname :"Take dinner"}];
  editTaskSubject = new BehaviorSubject<any>(null);
  constructor() { 
  }

  addNewTask(tasktext: string):void{
    this.taskArray.push({id:this.id, taskname: tasktext})
    this.id++;
  }
  editOldTask(taskParam:task):void{
    // for(let i=0;i<this.taskArray.length;i++){
    //   if(task.id == this.taskArray[i].id){
    //     this.taskArray[i]=task.taskname;
    //   }
    // }

    this.taskArray.map((task) => {
      if(taskParam.id == task.id){
        task.taskname=taskParam.taskname;
      }
    })
  }
}
