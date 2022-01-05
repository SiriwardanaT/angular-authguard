import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import serverConfig from '../../config/serverConfig.js'
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }
  //get request api call
  getAllStudents(){
     return this.http.get(`${serverConfig.serverApiUrl}/api/students`);
  }
  //post request api call
  createStudent(){
     
  }
  //put request api call
  updateStudent(){

  }
  //delete request api call
  deleteStudent(){

  }
}

