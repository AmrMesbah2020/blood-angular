import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:AdminPannelComponent},
];

@NgModule({
  declarations: [
    AdminPannelComponent
  ],
  imports: [
 

    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
