import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counterValue=0;
  constructor() { }

  ngOnInit(): void {
  }
  increment():void {
    this.counterValue = this.counterValue+1;
  }
  decrement():void {
    this.counterValue = this.counterValue-1;
  }
  reset():void {
    
    this.counterValue = 0;
  }

}
