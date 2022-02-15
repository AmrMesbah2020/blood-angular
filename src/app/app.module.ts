import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgModule } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';
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
import { RequestsComponent } from './components/requests/requests.component';
import { LocationComponent } from './components/location/location.component';
import { DonorsComponent } from './components/donors/donors.component';
import { AddArticalComponent } from './components/add-artical/add-artical.component';


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
    EligibilityQuizComponent,
    FaqComponent,
    RequestsComponent,
    MedicationAndMedicalDevicesComponent,
    AddArticalComponent,


    PostsComponent,
    UserProfileComponent,
    MakeRequestsComponent,
    LifestyleComponent,
    PregencyComponent,
    WorkAndTravelComponent,
    MedicalConditionsComponent,
    OtherComponent,
    RequestsComponent,
    LocationComponent,
    DonorsComponent,
    AddArticalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HttpClientModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCXJfgC7dkpJB_vdkoK31hqOolDRnILoG0'
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
