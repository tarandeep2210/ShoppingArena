import { DataService } from './data.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedin:boolean;
  token: string;
  checkerror: boolean;
  constructor(public router: Router, private dataservice: DataService) { }


  signUpuser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      response => {
        console.log(response);
        this.router.navigate(['/login']);
      }
    )
    .catch(
      (error) => console.log(error)
    )
  }

  signInuser(email:string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(
      response => {
        console.log("Logged In");
        this.router.navigate(['/userhome']);
        this.signedin = true;
        this.dataservice.updatedata.next(this.signedin);
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        )
      }
    )
    .catch(
      (error) => {
        console.log(error);
        this.checkerror = false;
        this.dataservice.checkdata.next(this.checkerror);
      }
    );
  }

  getToken() {
     firebase.auth().currentUser.getIdToken()
    .then(
      (token: string) => this.token = token
    );
    return this.token;
  }
}
