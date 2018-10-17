import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Shopping-Arena';


  ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyD3FhqM22wCMY6SV5jxkypjek7mcTR8zoY",
    authDomain: "shopping-arena-a15dd.firebaseapp.com"
  });
}
}
