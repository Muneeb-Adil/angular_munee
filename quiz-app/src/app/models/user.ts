export class User {
    name: string
    email : string
    date_of_birth : Date
    marks: number

    constructor(User: any) {
        this.name = User.username
        this.email = User.email
        this.date_of_birth = User.date_of_birth
        this.marks=User.marks
    }
}