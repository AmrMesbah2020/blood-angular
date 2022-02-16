import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ArticlesComponent } from './articles/articles.component';
import { RequestsComponent } from './requests/requests.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path:'admin',component:AdminPannelComponent},
  {path:'posts-admin',component:PostsComponent},
  {path:'articles-admin',component:ArticlesComponent},
  {path:'requests-admin',component:RequestsComponent},
  {path:'feedback-admin',component:FeedbackComponent},

];

@NgModule({
  declarations: [
    AdminPannelComponent,
    PostsComponent,
    ArticlesComponent,
    RequestsComponent,
    FeedbackComponent
  ],
  imports: [
 

    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
