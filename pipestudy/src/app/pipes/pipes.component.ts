import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  // birthday = new Date(1988, 3, 15); 
  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  dateToday: string;
  name: string;
  constructor() {
    this.dateToday = new Date().toDateString();
    this.name = "Simplilearn";
  }
  public day = new Date().getDay();

  ngOnInit(): void {
  }

}
