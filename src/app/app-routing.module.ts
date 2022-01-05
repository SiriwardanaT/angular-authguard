import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './authGuard/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Not404Component } from './not404/not404.component';


const routes: Routes = [
  { 
    path: '',   
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  { 
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'login',
    component:LoginComponent
  },

  // Not found page 
  { 
    path: '**', component:Not404Component 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
