
import { PostsComponent } from './components/posts/posts.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EligibilityQuizComponent } from './components/eligibility-quiz/eligibility-quiz.component';

const routes: Routes = [

  {path:'eligibilty-quiz',component:EligibilityQuizComponent},

  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'articles',component:ArticlesComponent},
  {path:'article/details',component:ArticleDetailsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'posts',component:PostsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
