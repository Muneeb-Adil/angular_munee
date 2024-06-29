import { Date } from "mongoose"

export class User {
    name: string
    email : string
    date_of_birth : string
    marks: number
    userId:number
    visited:boolean
    attemptedQuizCategory: string

    constructor(User: any) {
        this.name = User.name
        this.email = User.email
        this.date_of_birth = User.date_of_birth
        this.marks=User.marks
        this.userId=User.userId
        this.visited = User.visited
        this.attemptedQuizCategory=User.attemptedQuizCategory
    }
}