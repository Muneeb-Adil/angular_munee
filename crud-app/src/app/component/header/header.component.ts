import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { EmployeeService } from 'src/app/services/employee.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SnackbarService } from 'src/app/core/snackbar.service';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  displayedColumns: string[] = [
    'id', 
    'firstName',
     'lastName', 
     'email',
     'dob',
     'company',
     'education',
     'experience',
     'gender',
     'package',
    'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cdr : ChangeDetectorRef, 
    private _dialog:MatDialog,
    private _empService:EmployeeService,
  private _snackBar : SnackbarService) { }

  openAddEditEmployeeForm(){
    this._dialog.open(EmpAddEditComponent).afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getEmployeeList()
          // this.cdr.markForCheck()
        }
        
      }
    });
  }
  openEditForm(data:any){
    this._dialog.open(EmpAddEditComponent,{
      data,
    }).afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getEmployeeList()
          // this.cdr.markForCheck()
        }
        
      }
    });
  }
  getEmployeeList(){
    this._empService.getEmployeeList().subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.sort=this.sort
        this.dataSource.paginator=this.paginator

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  
 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  deleteEmployee(id :any){
    this._dialog.open(DeleteEmployeeComponent,{
      id,
    }).afterClosed().subscribe({
      next: (val) => {
        if(val == 'yes'){
          console.log(val)
          console.log(id)
          this._empService.deleteEmployee(id).subscribe({
            next:(res)=>{
              this._snackBar.openSnackBar("Employee deleted")
              this.getEmployeeList()
            },
            error:console.log,
          })
        }

      }
    });
  }

  ngOnInit(): void {
    this.getEmployeeList();
 
  }

}
