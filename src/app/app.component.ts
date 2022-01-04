import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  username:String;
  password:String;
  auth:any;

  constructor(
    public authService:AuthServiceService
    
  )
  {
     
  }
 
  ngOnInit(): void {
     
  }
  login(){
   this.authService.login(this.username,this.password);
   
  }
  
}
