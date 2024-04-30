export class Question {
    question: string
    incorrect_answers: string[]
    correct_answer: string

    constructor(question: any) {
        this.question = question.question
        this.incorrect_answers = question.incorrect_answers
        this.correct_answer = question.correct_answer
    }
}