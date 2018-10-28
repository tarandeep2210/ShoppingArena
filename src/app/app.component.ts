import { Component,OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Post {
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
  title = '';
  items: Observable<any[]>;


  constructor(private db: AngularFirestore) {
    this.items = db.collection('Products').valueChanges();
  }
  addPost() {
    this.db.collection('Products').add({'name': 'macbook'});
  }
  ngOnInit() {
    // this.postsCol = this.afs.collection('posts');
    // this.posts = this.postsCol.valueChanges();
    // console.log(this.posts);
  }

  
  // ngOnInit(){
  // firebase.initializeApp({
  //   apiKey: "AIzaSyD3FhqM22wCMY6SV5jxkypjek7mcTR8zoY",
  //   authDomain: "shopping-arena-a15dd.firebaseapp.com",
  //   databaseURL: "https://shopping-arena-a15dd.firebaseio.com",
  //   projectId: "shopping-arena-a15dd",
  //   storageBucket: "shopping-arena-a15dd.appspot.com",
  //   messagingSenderId: "557549471775"
  // });
// }
}
