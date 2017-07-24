import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
private httpThang: Http
  constructor(

  ) { }
  // an argument for each "req.body" in the API route
  signup(theFullName, theEmail, thePassword, theZipcode, thePhoto, theMore) {
      return this.httpThang
        .post(
          'http://localhost:3000/api/signup',

          // Form body information to send to the back end (req.body)
          {
            signupFullName: theFullName,
            signupEmail: theEmail,
            signupPassword: thePassword,
            signupZipcode: theZipcode,
            signupPhoto: thePhoto,
            signupMore: theMore,
          },

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json());
  } // close signup()


  login(theEmail, thePassword) {
      return this.httpThang
        .post(
          'http://localhost:3000/api/login',

          // Form body information to send to the back end (req.body)
          {
            loginEmail: theEmail,
            loginPassword: thePassword
          },

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json());
  } // close login()


  logout() {
      return this.httpThang
        .post(
          'http://localhost:3000/api/logout',

          // Nothing to send to the back end (req.body)
          {},

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json());
  } // close logout()


  checklogin() {
      return this.httpThang
        .get(
          'http://localhost:3000/api/checklogin',

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json());
  } // close checklogin()

  }
