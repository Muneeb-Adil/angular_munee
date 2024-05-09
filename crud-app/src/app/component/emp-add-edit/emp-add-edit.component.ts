import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {
  education :string[]=[
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ]
  empForm:FormGroup;
  
  constructor(private _dialogRef:MatDialogRef<EmpAddEditComponent>,private _fb:FormBuilder, private _empService:EmployeeService) { 
    this.empForm = this._fb.group({
      firstName:"",
      lastName:"",
      email:"",
      dob:"",
      gender:"",
      education:"",
      company:"",
      experience:"",
      package:""

    })
  }

  ngOnInit(): void {
  }
  onFormSubmit(){
    if(this.empForm.valid){
      this._empService.addEmployee(this.empForm.value).subscribe({
        next:(val:any)=>{
          alert("Employee added successfully")
          this._dialogRef.close()

        },
        error:(err:any)=>{
          console.log(err)
        }
      });
    }
  }

}
