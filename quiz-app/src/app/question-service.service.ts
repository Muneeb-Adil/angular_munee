import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from './models/question';
import { Category } from './models/category';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  correctAnswersCount = 0
  quizCategory! : number

  private baseUrl = 'https://opentdb.com/api.php';

  constructor(private http: HttpClient) { }
  getCategory():Observable<Category[]>{
    return this.http.get<Category[]>('https://opentdb.com/api_category.php')
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`https://opentdb.com/api.php/?amount=10&category=${this.quizCategory}&type=multiple&difficulty=medium`).pipe(
      map((response: any) => {
        return response.results.map((result: any) => ({
          question: result.question,
          correct_answer: result.correct_answer,
          incorrect_answers: result.incorrect_answers
        }));
      })
    );
  }

  getCorrectAnswerCount(){
    return this.correctAnswersCount
  }
}
