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
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { EligibilityQuizComponent } from './components/eligibility-quiz/eligibility-quiz.component';
import { FaqComponent } from './components/FAQ/faq/faq.component';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MakeRequestsComponent } from './components/make-requests/make-requests.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AuthGuard } from './guards/auth.guard';

// lazy load //
const routes: Routes = [
  {
    path:'', 

    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'admin', 

    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },


  {path:'eligibilty-quiz',component:EligibilityQuizComponent},
  // {path:' ' , redirectTo:'login',pathMatch:'fully'},

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
  {path:'profile',component:UserProfileComponent,canActivateChild:[AuthGuard]},
  {path:'profile/:id',component:UserProfileComponent},
  {path:'make-request',component:MakeRequestsComponent},
  {path:'contact-us',component:ContactUsComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
