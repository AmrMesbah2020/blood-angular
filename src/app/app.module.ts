import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
// import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { EligibilityQuizComponent } from './components/eligibility-quiz/eligibility-quiz.component';
import { FaqComponent } from './components/FAQ/faq/faq.component';
import { MedicationAndMedicalDevicesComponent } from './components/FAQ/medication-and-medical-devices/medication-and-medical-devices.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './components/posts/posts.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MakeRequestsComponent } from './components/make-requests/make-requests.component';
import { LifestyleComponent } from './components/FAQ/lifestyle/lifestyle.component';
import { PregencyComponent } from './components/FAQ/pregency/pregency.component';
import { WorkAndTravelComponent } from './components/FAQ/work-and-travel/work-and-travel.component';
import { MedicalConditionsComponent } from './components/FAQ/medical-conditions/medical-conditions.component';
import { OtherComponent } from './components/FAQ/other/other.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminModule } from './components/admin/admin.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    LoginComponent,
    RegisterComponent,
    EligibilityQuizComponent,
    FaqComponent,
    MedicationAndMedicalDevicesComponent,
    
  
    PostsComponent,
    UserProfileComponent,
    MakeRequestsComponent,
    LifestyleComponent,
    PregencyComponent,
    WorkAndTravelComponent,
    MedicalConditionsComponent,
    OtherComponent,
    ContactFormComponent,
    MaxLengthPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    NgbModule, 
    AdminModule,
    HttpClientModule,

    // MatToolbarModule,  
  ],


  providers: [AuthGuard],
  bootstrap: [AppComponent]

})
export class AppModule { }
