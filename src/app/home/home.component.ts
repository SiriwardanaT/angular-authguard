import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public studentsService: StudentsService, private router: Router) { }
  public studentList = []
  ngOnInit(): void {
    //get all hostal students information
    this.getAll();
  }

  //get all students
  getAll() {
    return this.studentsService.getAllStudents().subscribe((response) => {
      console.log(response['code'])
      if (response['code'] === 200) {
        this.studentList =  response['students']
      }
      else {
        this.router.navigate(['login'])
      }
    })
  }

}
