import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashCounterComponent } from './components/home/dash-counter/dash-counter.component';
import { HeaderComponent } from './components/shard/header/header.component';
import { FooterComponent } from './components/shard/footer/footer.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EligibilityQuizComponent } from './components/eligibility-quiz/eligibility-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashCounterComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    LoginComponent,
    RegisterComponent,
    EligibilityQuizComponent
  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
