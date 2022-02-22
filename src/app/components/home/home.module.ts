import { NgModule } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashCounterComponent } from './dash-counter/dash-counter.component';
import { RouterModule, Routes } from '@angular/router';
import { MaxLengthPipe } from 'src/app/pipes/max-length.pipe';




const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'dash-counter',component:DashCounterComponent},
 
  ];

@NgModule({
  declarations: [
    HomeComponent,
    DashCounterComponent,
  
  ],
  imports: [
    CommonModule,

    CommonModule,RouterModule.forChild(routes)

  ]
})
export class HomeModule { }
