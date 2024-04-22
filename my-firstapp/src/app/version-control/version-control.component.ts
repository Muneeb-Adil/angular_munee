import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-control',
  templateUrl: './version-control.component.html',
  styleUrls: ['./version-control.component.scss']
})
export class VersionControlComponent implements OnInit {
  versionNumber : string = "0.0.2";

  constructor() { }

  ngOnInit(): void {
  }

}
