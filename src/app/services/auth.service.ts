import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {
BASE_URL: string = environment.apiBase;
  constructor(
    private httpThang: Http
  ) { }
  // an argument for each "req.body" in the API route
  signup(theFullName, theEmail, thePassword, theZipcode, thePhoto, theMore) {
      return this.httpThang
        .post(
          environment.apiBase + '/api/signup',

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
          environment.apiBase + '/api/login',

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
          environment.apiBase + '/api/logout',

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
          environment.apiBase + '/api/checklogin',

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json());
  } // close checklogin()

  getNeighborList() {
    return this.httpThang.get(`${this.BASE_URL}/api/neighbors`)
    //take magical array i receive and turn it into json which we use
      .map((res) =>  res.json());
  }
//added these last 3 as well in case neighbor wants to make changes.
  getOneNeighbor (myId) {

    let endPoint = "api/neighbors/"+ myId
    //myHttp needs to match what i called it on lined10 in constructor
    return this.httpThang.get(`${this.BASE_URL}/api/neighbors/${myId}`)
        .map((res) =>  res.json());
  }

  // aka: editOne()
  // infoTo post is the this.characterToCreateOrEdit which is second parameter of EditOne()
  changeNeighborinDatabase(myId,infoToPost){
    let endPoint = "api/neighbors/"+myId;
    return this.httpThang.post(this.BASE_URL+endPoint, infoToPost)
  }

  
  // deleteOne (myId) {
  //   let endPoint = "/api/neighbors"+myId;
  //   //myHttp needs to match what i called it on lined10 in constructor
  //   return this.httpThang.delete(this.BASE_URL+endPoint)
  //
  // }
  }
