export class Todo{
    id: number
    todo:string
    completed:boolean
    
    constructor(task: any){
        this.id = task.id,
        this.todo = task.todo;
        this.completed = task.completed;
    }
}