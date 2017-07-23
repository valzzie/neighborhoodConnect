import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  //update variables from the homepage html

  fullNameValue: string;
  emailValue: string;
  passwordValue: string;
  constructor(
      private authThang: AuthService
  ) { }

  ngOnInit() {
    console.log('hi');
  }

  doSignUp(){

    //fill this in from users-angular

  }//closes the doSignUp function
}
