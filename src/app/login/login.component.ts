import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Form,FormControl,FormBuilder, FormGroup,Validators,FormsModule, MaxValidator} from '@angular/forms';
import { StudentServicesService } from '../services/student-services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm : FormGroup;
  image:string ="assets/login.jpg"

  constructor(private router:Router,
    private fb:FormBuilder,
    private studenService: StudentServicesService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      passWord : new FormControl('',Validators.compose([ Validators.required,Validators.minLength(4),Validators.maxLength(20)
      ])),
      emailID :new FormControl('',[Validators.required,Validators.email,Validators.pattern('[a-z0-9]+@gmail.com')])
    });
  }



  login(){
    this.studenService.getStudentList().subscribe(data=>{
     

      const student=data.find((a:any)=>{
        console.log(a)
        return a.emailID === this.loginForm.value.emailID && a.passWord === this.loginForm.value.passWord;
      })
      if(student){
       
        this.loginForm.reset();
        this.router.navigate(['dsb']);
      }else{
        alert("Incorrect mailId or Password")
        this.loginForm.reset();
      }
    },err=>{
      alert("Somthing went worng")
    })
    
  }
  
  resetForm(){
    this.loginForm.reset();
  }

}
