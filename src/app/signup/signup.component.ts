import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FileUploader } from 'ng2-file-upload';
import {environment} from '../../environments/environment';
import { RouterLink} from '@angular/router';
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

    myCoolUploader = new FileUploader({
     url: environment.apiBase + '/api/signup',
     //refer to image as profileImage in backend.
     itemAlias: 'profileImage'
     });

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

  doSignUp(){
    this.myCoolUploader.onBuildItemForm= (item,form) => {
      form.append("signupFullName", this.fullNameValue);
      form.append("signupEmail", this.emailValue);
      form.append("signupPassword", this.passwordValue);
      form.append("signupZipcode", this.zipcodeValue);
      form.append("signupMore", this.moreValue);
    };

    this.myCoolUploader.onSuccessItem= (item, form) => {
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
       this.routerThang.navigate(['api/events']);
    };

    this.myCoolUploader.onErrorItem = (item, response) => {
      const parsedError = JSON.parse(response);
      this.errorMessage = parsedError.message;
    };

    this.myCoolUploader.uploadAll();
  }

  }
