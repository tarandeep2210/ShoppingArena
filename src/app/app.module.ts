import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { Nav2Component } from './nav2/nav2.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserHomeComponent } from './user-home/user-home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule,MatCheckboxModule,MatFormFieldModule} from '@angular/material';
import { Slider2Component } from './slider2/slider2.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    Nav2Component,
    SliderComponent,
    LoginComponent,
    SignupComponent,
    UserHomeComponent,
    Slider2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'userhome', component: UserHomeComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
