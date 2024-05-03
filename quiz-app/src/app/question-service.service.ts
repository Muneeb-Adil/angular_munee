import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from './models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  correctAnswersCount = 0

  private baseUrl = 'https://opentdb.com/api.php';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('https://opentdb.com/api.php/?amount=10&category=18&difficulty=medium&type=multiple').pipe(
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
