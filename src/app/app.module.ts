import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashCounterComponent } from './components/home/dash-counter/dash-counter.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/shard/header/header.component';
import { FooterComponent } from './components/shard/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashCounterComponent,
    HomeComponent,
    ProfileComponent,
    LayoutComponent
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
