import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogStudentCreateComponent } from '../dialog-student-create/dialog-student-create.component';
import { DialogStudentViewComponent } from '../dialog-student-view/dialog-student-view.component';
import { StudentServicesService } from '../services/student-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['firstName', 'lastName','branch','emailID','address','phoneNumber','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  

  constructor(private dialog:MatDialog,
    private studentService:StudentServicesService,
    private router:Router){}

  ngOnInit(): void {
    this.getAllStudent()
  }



  openDialog() {
    this.dialog.open( DialogStudentCreateComponent, {
     width:'60%',
     
     
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getAllStudent();
      }
    })
    
  }
  getAllStudent(){
    this.studentService.getStudentList().subscribe({
      next:(data)=>{
        console.log(data)
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error whlie fetch the records!!"+err)

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

  editStudent(row:any){
    this.dialog.open( DialogStudentCreateComponent, {
      width:'60%',
     
      data:row
      
     }).afterClosed().subscribe(val=>{
       if(val==="update"){
         this.getAllStudent()
       }
     });
  }

  deleteStudent(id:number){
    this.studentService.deleteStudent(id).subscribe({
     next:(data)=>{
       console.log("deleted")
       this.getAllStudent()
     },error:()=>{
      this.getAllStudent()
     }
    })
    

  }

  openDialogview(row:any){
    this.dialog.open(DialogStudentViewComponent,{
      width:'50%',
      data:row
    })
  }
  
  logout(){
    
    this.router.navigate(['']);
  }

}
