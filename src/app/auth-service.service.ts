import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public router :Router) { }
  public isAutheticated = false;
  login(username:String, password:String){
      console.log(username +" "+ password)
      if(username === "admin" && password === "admin"){
          this.isAutheticated = true
          this.router.navigate(['home']);
      }
      else{
        this.isAutheticated = false
      }
  }

}
