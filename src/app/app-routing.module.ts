import { CaloriesCalculaterComponent } from './components/calories-calculater/calories-calculater.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { LocationComponent } from './components/location/location.component';
import { DonorsComponent } from './components/donors/donors.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EligibilityQuizComponent } from './components/eligibility-quiz/eligibility-quiz.component';

import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { MakeRequestsComponent } from './components/make-requests/make-requests.component';
import { RequestsComponent } from './components/requests/requests.component';
import { PrediabetesComponent } from './components/prediabetes/prediabetes.component';


// lazy load //
const routes: Routes = [
  {

    path:'',
    component:LayoutComponent,

    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'admin',
    canActivate:[AuthGuard],
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'',
    component:LayoutComponent,

    loadChildren: () => import('./components/FAQ/faq.module').then(m => m.FaqModule)
  },
  {
    path:'',
    component:LayoutComponent,
    canActivate:[AuthGuard],

    loadChildren: () => import('./components/all-articles/all-articles.module').then(m => m.AllArticlesModule)
  },
  {
    path:'',
    component:LayoutComponent,
    canActivate:[AuthGuard],

    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path:'',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },

  { path:'',
  component:LayoutComponent,

  children:[

  {path:'eligibilty-quiz',component:EligibilityQuizComponent,canActivate:[AuthGuard]},
  // {path:' ' , redirectTo:'login',pathMatch:'fully'},
  {path:'posts',component:PostsComponent,canActivate:[AuthGuard]},
  {path:'contact-us',component:ContactFormComponent,canActivate:[AuthGuard]},
  {path:'donors',component:DonorsComponent,canActivate:[AuthGuard]},
  {path:'location',component:LocationComponent,canActivate:[AuthGuard]},
  {path:'requests',component:RequestsComponent,canActivate:[AuthGuard]},
  {path:'make-request',component:MakeRequestsComponent,canActivate:[AuthGuard]},
  {path:'calories-calc',component:CaloriesCalculaterComponent,},
  {path:'prediabetes-test',component:PrediabetesComponent,},
  {path:'profile-page/:id', component:ProfilePageComponent,canActivate:[AuthGuard]}
  ]}











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
