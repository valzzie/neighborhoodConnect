import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedOut: boolean = false;

  // fullNameValue: string;
  emailValue: string;
  passwordValue: string;

  errorMessage: string;

  loginEmail: string;
  loginPassword: string;

  loginErrorMessage: string;
  constructor(
    private authThang: AuthService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    this.authThang.checklogin()
      // If success, we are logged in.
      .then((resultFromApi) => {
          this.routerThang.navigate(['api/events']);
      })

      // Even if you don't do anything on error, catch to avoid a console error.
      .catch((err) => {
          this.isLoggedOut = true;
      });
  }
  doLogin() {
    this.authThang.login(this.loginEmail, this.loginPassword)
      .then((resultFromApi) => {
          // clear the form
          this.loginEmail = "";
          this.loginPassword = "";

          // clear the error message
          this.loginErrorMessage = "";

          // redirect to /camels
          this.routerThang.navigate(['api/events']);
      })
      .catch((err) => {
          const parsedError = err.json();
          this.loginErrorMessage = parsedError.message;
      });
  } // close doLogin()
}
