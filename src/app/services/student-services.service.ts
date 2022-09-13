import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../endpoints';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {

  constructor(private httpclient:HttpClient , private endpoints:Endpoints) { }

  
  getStudentList(){
    return this.httpclient.get<any>(`${this.endpoints.baseUrl}/list` );
  }

  createStudent(data:any){
    return this.httpclient.post(`${this.endpoints.baseUrl}/add`,data);
  }

  updateStudent(data:any,id:number){
    return this.httpclient.put<any>(`${this.endpoints.baseUrl}+id`,data)

  }
  deleteStudent(id:number){
    return this.httpclient.delete<any>(`${this.endpoints.baseUrl}+id`)
  }
  
}
