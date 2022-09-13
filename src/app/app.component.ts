import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogStudentCreateComponent } from './dialog-student-create/dialog-student-create.component';
import { StudentServicesService } from './services/student-services.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogStudentViewComponent } from './dialog-student-view/dialog-student-view.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  

  constructor(){}

  ngOnInit(): void {
   // this.getAllStudent()
  }


/*
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
      console.log("hiii")
      console.log("deleted")
      this.getAllStudent()
     }
    })
    

  }

  openDialogview(row:any){
    this.dialog.open(DialogStudentViewComponent,{
      width:'50%',
      data:row
    })
  }*/
}
