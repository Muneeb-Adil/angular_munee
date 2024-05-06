import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display-each-question',
  templateUrl: './display-each-question.component.html',
  styleUrls: ['./display-each-question.component.css']
})
export class DisplayEachQuestionComponent implements OnInit {
  @Input() question:any;
  @Input() index:any;
  @Input() questionArrayLength?: number;
  @Output() answerEmitter: EventEmitter<string> = new EventEmitter();
  
  questionForm!:FormGroup;
  
  constructor(private router:Router) { }
  ngOnInit(): void {
    this.questionForm=new FormGroup({
      answer: new FormControl('',Validators.required)
    })
  }

  onSubmit(){
     this.answerEmitter.emit(this.questionForm.value);
  }
  showResult(){
    this.router.navigate(['end-page'])

  }

}
