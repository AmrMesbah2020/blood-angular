import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashCounterComponent } from './dash-counter/dash-counter.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:' ',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'dash-counter',component:DashCounterComponent},
 
  ];

@NgModule({
  declarations: [
    HomeComponent,
    DashCounterComponent
  ],
  imports: [
    CommonModule,

    CommonModule,RouterModule.forChild(routes)

  ]
})
export class HomeModule { }
