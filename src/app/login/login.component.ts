import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
     public authService:AuthService

  ) { }
 
  username:String;
  password:String;
 
  
  

  ngOnInit(): void {
  }
  
  //user login
  loginUser(){
    this.authService.login(this.username , this.password);
  }

}
