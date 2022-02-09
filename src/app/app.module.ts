import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EligibilityQuizComponent } from './components/eligibility-quiz/eligibility-quiz.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashCounterComponent } from './components/dash-counter/dash-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    EligibilityQuizComponent,
    HeaderComponent,
    FooterComponent,
    DashCounterComponent
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
