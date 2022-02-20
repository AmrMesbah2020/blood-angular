import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaqComponent } from './faq/faq.component';
import { MedicationAndMedicalDevicesComponent } from './medication-and-medical-devices/medication-and-medical-devices.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { MedicalConditionsComponent } from './medical-conditions/medical-conditions.component';
import { OtherComponent } from './other/other.component';
import { PregencyComponent } from './pregency/pregency.component';
import { WorkAndTravelComponent } from './work-and-travel/work-and-travel.component';

import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';


const routes: Routes = [

  {path:'faq',component:FaqComponent},
  {path:'faq/medication-and-medical-devices',component:MedicationAndMedicalDevicesComponent},
  {path:'faq/lifestyle',component:LifestyleComponent},
  {path:'faq/medical-conditions',component:MedicalConditionsComponent},
  {path:'faq/other',component:OtherComponent},
  {path:'faq/pregency',component:PregencyComponent},
  {path:'faq/work-and-travel',component:WorkAndTravelComponent},
];


@NgModule({
  declarations: [
    FaqComponent,
    MedicationAndMedicalDevicesComponent,
    LifestyleComponent,
    MedicalConditionsComponent,
    OtherComponent,
    PregencyComponent,
    WorkAndTravelComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    HttpClientModule,
  ]
})
export class FaqModule { }
