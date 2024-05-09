import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _dialog:MatDialog,private _empService:EmployeeService) { }

  openAddEditEmployeeForm(){
    this._dialog.open(EmpAddEditComponent);
  }
  getEmployeeList(){
    this._empService.getEmployeeList().subscribe({
      next:(res)=>{
        console.log(res)

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.getEmployeeList();
  }

}
