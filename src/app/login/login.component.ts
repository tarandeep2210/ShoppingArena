import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signedin: boolean;
  form: FormGroup;
  check: boolean = true;
  
  constructor(private router: Router, private dataservice: DataService, private authservice: AuthService) { }


  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, {validators: [Validators.email, Validators.required, Validators.minLength(10)]}),
      'password': new FormControl(null, {validators: [Validators.required]}),
    });

    this.dataservice.checkdata.subscribe(
      (response : boolean) => this.check = response
    )
  }

  onSignup(form: NgForm) {
    const email1 = form.value.email;
    const password1 = form.value.password;
    console.log(email1,password1);
    this.authservice.signUpuser(email1,password1);
    // this.router.navigate(['/login']);

  }

  onSignin() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.authservice.signInuser(email,password);
    // this.listofUsers.forEach(item => {
    //   if (item.email === this.form.value.email && item.password === this.form.value.password ) {
    //       this.router.navigate(['/home']);
    //        this.check = true;
    //        this.signedin = true;
    //        return this.dataservice.updatedata.next(this.signedin)
    //      }
    // });
    // this.form.reset();
    //return this.check = false;

  }


}
