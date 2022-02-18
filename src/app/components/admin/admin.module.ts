import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ArticlesComponent } from './articles/articles.component';
import { RequestsComponent } from './requests/requests.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: 'adminn',
    children: [
      { path: 'dashboard', component: AdminPannelComponent },
      { path: 'posts-admin', component: PostsComponent },
      { path: 'articles-admin', component: ArticlesComponent },
      { path: 'requests-admin', component: RequestsComponent },
      { path: 'feedback-admin', component: FeedbackComponent },
      { path: 'add-admin', component: AddAdminComponent },


    ]
  }
];


@NgModule({
  declarations: [
    AdminPannelComponent,
    PostsComponent,
    ArticlesComponent,
    RequestsComponent,
    FeedbackComponent,
    AddAdminComponent,

  ],
  imports: [

    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    

  ]
})
export class AdminModule { }
