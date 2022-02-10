import { EligibilityQuizComponent } from './components/eligibility-quiz/eligibility-quiz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'eligibilty-quiz',component:EligibilityQuizComponent},
  // {path:'', redirectTo:'login' , pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
