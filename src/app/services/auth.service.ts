import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ServerConfig from '../../config/serverConfig.js';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient,private routers:Router) {}

  //login post and secure service api call
  login(username: String, password: String) {
    
    this.http
      .post<any>(`${ServerConfig.serverApiUrl}/login`, {
        username: username,
        password: password,
      })
      .subscribe((response: any) => {
        this.setToken(response['token']);
        this.routers.navigate(['home'])
      });
  }
  //validate token
  isLogginUser() {
     if(this.getToken() != null){
        return true
     }
     else{
       return false
     }
  }
  //get token from localstorage
  getToken() {
    return localStorage.getItem('token');
  }
  //set token to local storage
  setToken(value: any) {
    localStorage.setItem('token', value);
  }
}
