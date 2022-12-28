import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';

import { ServicesComponent } from './components/services/services.component';
import { StartLoginComponent } from './components/start-login/start-login.component';
import {ContactComponent} from './components/contact/contact.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
const routes: Routes = [
 
  {path: '',
  component: AdminDashboardComponent,
  children:[
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home',component:HomeComponent },
  {path: 'about' ,component: AboutComponent},
  {path: 'services' , component: ServicesComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'login', component:StartLoginComponent},
  
  {path: '**', component:PageNotFoundComponent}

  ],
},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
