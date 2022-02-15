<<<<<<< HEAD
import { AddArticalComponent } from './components/add-artical/add-artical.component';
import { DonorsComponent } from './components/donors/donors.component';
import { WorkAndTravelComponent } from './components/FAQ/work-and-travel/work-and-travel.component';
import { PregencyComponent } from './components/FAQ/pregency/pregency.component';
import { OtherComponent } from './components/FAQ/other/other.component';
import { MedicalConditionsComponent } from './components/FAQ/medical-conditions/medical-conditions.component';
import { LifestyleComponent } from './components/FAQ/lifestyle/lifestyle.component';
import { MedicationAndMedicalDevicesComponent } from './components/FAQ/medication-and-medical-devices/medication-and-medical-devices.component';
import { PostsComponent } from './components/posts/posts.component';


import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EligibilityQuizComponent } from './components/eligibility-quiz/eligibility-quiz.component';
import { FaqComponent } from './components/FAQ/faq/faq.component';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DashCounterComponent } from './components/home/dash-counter/dash-counter.component';
import { MakeRequestsComponent } from './components/make-requests/make-requests.component';
import { RequestsComponent } from './components/requests/requests.component';
import { LocationComponent } from './components/location/location.component';

const routes: Routes = [

  {path:'eligibilty-quiz',component:EligibilityQuizComponent},

  {path:'home',
  children:[
    {
    path:'', component:HomeComponent
},
{
  path:'dash-counter', component:DashCounterComponent
  },

  ]

},
  {path:'articles',component:ArticlesComponent},
  {path:'article/details',component:ArticleDetailsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'faq',component:FaqComponent},
  {path:'faq/medication-and-medical-devices',component:MedicationAndMedicalDevicesComponent},
  {path:'faq/lifestyle',component:LifestyleComponent},
  {path:'faq/medical-conditions',component:MedicalConditionsComponent},
  {path:'faq/other',component:OtherComponent},
  {path:'faq/pregency',component:PregencyComponent},
  {path:'faq/work-and-travel',component:WorkAndTravelComponent},
  {path:'posts',component:PostsComponent},
  {path:'profile',component:UserProfileComponent},
  {path:'profile/:id',component:UserProfileComponent},
  {path:'make-request',component:MakeRequestsComponent},
  {path:'requests', component:RequestsComponent},
  {path:'location',component:LocationComponent},
  {path: 'donors',component:DonorsComponent},
  {path: 'add-artical',component:AddArticalComponent},
  // {path: 'location/location',component:LocationComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { WorkAndTravelComponent } from './components/FAQ/work-and-travel/work-and-travel.component';
import { PregencyComponent } from './components/FAQ/pregency/pregency.component';
import { OtherComponent } from './components/FAQ/other/other.component';
import { MedicalConditionsComponent } from './components/FAQ/medical-conditions/medical-conditions.component';
import { LifestyleComponent } from './components/FAQ/lifestyle/lifestyle.component';
import { MedicationAndMedicalDevicesComponent } from './components/FAQ/medication-and-medical-devices/medication-and-medical-devices.component';
import { PostsComponent } from './components/posts/posts.component';


import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EligibilityQuizComponent } from './components/eligibility-quiz/eligibility-quiz.component';
import { FaqComponent } from './components/FAQ/faq/faq.component';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MakeRequestsComponent } from './components/make-requests/make-requests.component';
import { HomeComponent } from './components/home/home.component';

// lazy load //
const routes: Routes = [
  {
    component:HomeComponent,
    path:'home',

    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },


  {path:'eligibilty-quiz',component:EligibilityQuizComponent},
  // {path:' ' , redirectTo:'login',pathMatch:'fully'},

  {path:'articles',component:ArticlesComponent},
  {path:'article/details/:id',component:ArticleDetailsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'faq',component:FaqComponent},
  {path:'faq/medication-and-medical-devices',component:MedicationAndMedicalDevicesComponent},
  {path:'faq/lifestyle',component:LifestyleComponent},
  {path:'faq/medical-conditions',component:MedicalConditionsComponent},
  {path:'faq/other',component:OtherComponent},
  {path:'faq/pregency',component:PregencyComponent},
  {path:'faq/work-and-travel',component:WorkAndTravelComponent},
  {path:'posts',component:PostsComponent},
  {path:'profile',component:UserProfileComponent},
  {path:'profile/:id',component:UserProfileComponent},
  {path:'make-request',component:MakeRequestsComponent},
  {path:'contact-us',component:ContactFormComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> b67066c359c0da758243db92d1df366b25ff6bfb
