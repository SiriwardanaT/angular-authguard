import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { 
    path:'home',
    component:HomeComponent,
    canActivate:[AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
