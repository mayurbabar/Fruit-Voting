import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VoteComponent } from './components/vote/vote.component';
import { ViewvotesComponent } from './components/viewvotes/viewvotes.component';


const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"}
  ,{path:"login", component:LoginComponent}
  ,{path:"register", component:RegisterComponent}
  ,{path:"vote", component:VoteComponent}
  ,{path:"viewvotes", component:ViewvotesComponent}
  ,// otherwise redirect to login
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }