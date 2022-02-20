import { AuthGuard } from './guards/auth.guard';
import { LocationComponent } from './components/location/location.component';
import { DonorsComponent } from './components/donors/donors.component';
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
import { EligibilityQuizComponent } from './components/eligibility-quiz/eligibility-quiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './components/posts/posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminModule } from './components/admin/admin.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
// import { MaxLengthPipe } from './pipes/max-length.pipe';
import { ToastrModule } from 'ngx-toastr';
import { FaqModule } from './components/FAQ/faq.module';
import { ProfileModule } from './components/profile/profile.module';
import { UserModule } from './components/user/user.module';
import { LayoutComponent } from './layout/layout.component';
import { RequestsComponent } from './components/requests/requests.component';
import { MakeRequestsComponent } from './components/make-requests/make-requests.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RequestsComponent,
    MakeRequestsComponent,
    EligibilityQuizComponent,
    DonorsComponent,
    PostsComponent,
    ContactFormComponent,
    // MaxLengthPipe,
    LocationComponent,
    LayoutComponent
 
  ],
  imports: [
 BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MatExpansionModule,
    NgbModule,
    AdminModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FaqModule,
    ProfileModule,
    UserModule,
    ToastrModule.forRoot()

    // MatToolbarModule,
  ],


  providers: [AuthGuard],
  bootstrap: [AppComponent]

})
export class AppModule { }
