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
import { ProductDetailComponent } from './product/product-detail.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ProductsResolverService } from './product/products-resolver.service';
import { SearchComponent } from './search/search.component';


var config = {
  apiKey: "AIzaSyD3FhqM22wCMY6SV5jxkypjek7mcTR8zoY",
  authDomain: "shopping-arena-a15dd.firebaseapp.com",
  databaseURL: "https://shopping-arena-a15dd.firebaseio.com",
  projectId: "shopping-arena-a15dd",
  storageBucket: "shopping-arena-a15dd.appspot.com",
  messagingSenderId: "557549471775"
};
// import { environment } from '../environments/environment';
 
// import { AngularFireModule } from 'angularfire2';
 
// import { AngularFirestoreModule } from 'angularfire2/firestore';



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
    FooterComponent,
    ProductDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),AngularFirestoreModule,AngularFireStorageModule,AngularFireAuthModule,
    MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'search', component: SearchComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'userhome', component: UserHomeComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'home', component: HomeComponent  },
      { path: '', redirectTo: '/home', pathMatch: 'full' }

    ])
  ],
  providers: [ProductsResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
