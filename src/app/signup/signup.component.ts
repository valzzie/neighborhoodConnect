import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoggedOut: boolean = false;
    //update variables from the signup html

    fullNameValue: string;
    emailValue: string;
    passwordValue: string;
    zipcodeValue: string;
    photoValue: string;
    moreValue: string;

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
          this.routerThang.navigate(['/events']);
      })

      // Even if you don't do anything on error, catch to avoid a console error.
      .catch((err) => {
          this.isLoggedOut = true;
      });
  }

  doSignUp(){
    // console.log("I'm in doSign Up");
    //fill this in from users-angular
    this.authThang.signup(this.fullNameValue, this.emailValue, this.passwordValue, this.zipcodeValue, this.photoValue, this.moreValue)
      .then((resultFromApi) => {
          // clear form
          this.fullNameValue = "";
          this.emailValue = "";
          this.passwordValue = "";
          this.zipcodeValue= "";
          this.photoValue = "";
          this.moreValue = "";
          // clear error message
          this.errorMessage = "";

          // redirect to /camels
          this.routerThang.navigate(['/events']);
  })//closes the doSignUp function
  .catch((err) => {
    // console.log("I'm in err", err);
      const parsedError = err.json();
      this.errorMessage = parsedError.message;
  });
  } // close doSignUp()

  }
