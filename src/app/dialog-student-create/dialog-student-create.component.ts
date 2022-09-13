import { Component, Inject, OnInit } from '@angular/core';
import {Form,FormControl,FormBuilder, FormGroup,Validators,FormsModule, MaxValidator} from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

import { StudentServicesService } from '../services/student-services.service';
@Component({
  selector: 'app-dialog-student-create',
  templateUrl: './dialog-student-create.component.html',
  styleUrls: ['./dialog-student-create.component.scss']
})
export class DialogStudentCreateComponent implements OnInit {
  hide = true;
  show=true;
  //disable:boolean;
  studentForm : FormGroup;
  actionBtn : string ="Save";
  constructor(private fd:FormBuilder, 
    private studenService:StudentServicesService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dilogRef:MatDialogRef<DialogStudentCreateComponent>) { }

  ngOnInit(): void {
    this.studentForm = this.fd.group({
      firstName : new FormControl('',Validators.compose([ Validators.required,Validators.minLength(4),Validators.maxLength(20)
      ])),

      lastName :new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ])),
      branch :new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)
      ])),
      
      emailID :new FormControl('',[Validators.required,Validators.email,Validators.pattern('[a-z0-9]+@gmail.com')]),
      passWord:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
      //passWord : new FormControl('',Validators.compose([ Validators.required,Validators.minLength(4),Validators.maxLength(20),
      //])),
      
      
      phoneNumber :new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]{10}$")
      ])),
      address :new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ])),
    })

    
    if(this.editData){
      this.actionBtn = "Update";
      this.show=false;
      this.studentForm.controls['firstName'].setValue(this.editData.firstName);
      this.studentForm.controls['lastName'].setValue(this.editData.lastName);
      this.studentForm.controls['branch'].setValue(this.editData.branch);
      this.studentForm.controls['emailID'].setValue(this.editData.emailID);
      this.studentForm.controls['passWord'].setValue(this.editData.passWord);
      this.studentForm.controls['phoneNumber'].setValue(this.editData.phoneNumber);
      this.studentForm.controls['address'].setValue(this.editData.address);
      
    }
    //console.log(this.editData) 
  }

  saveStudent(){
    if(!this.editData){
      if(this.studentForm.valid){
        this.studenService.createStudent(this.studentForm.value).subscribe({
          next:()=>{
            alert("student added successfully");
            this.studentForm.reset();
            this.dilogRef.close("save");
          },
          error:(err)=>{
            alert("While creating student details in  error ");
            console.log("error")
          }
        })
         
      }
    }else{
      this.updateStudent()
    }
  }

  updateStudent(){
    this.studenService.updateStudent(this.studentForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Student Update Successfully");
        this.studentForm.reset();
        this.dilogRef.close('update');
      },error:()=>{
        alert("Error while update the record!!")
      }
    })
  }
  
  resetForm(){
    this.studentForm.reset();
  }



  
}
