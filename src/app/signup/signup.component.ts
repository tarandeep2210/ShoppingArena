import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice: AuthService,private router: Router) { }


  ngOnInit() {
  }
  // onSignup(form: NgForm) {
  //   const email = form.value.email;
  //   const password = form.value.password;
  //   this.authservice.signUpuser(email,password);
  //   // this.router.navigate(['/login']);

  // }

}
