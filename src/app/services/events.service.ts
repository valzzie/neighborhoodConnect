import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
@Injectable()
export class EventsService {
BASE_URL: string = environment.apiBase;

  constructor(private myHttp: Http) { }

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/events`)
    //take magical array i receive and turn it into json which we use
      .map((res) =>  res.json());
  }

  getOne (id) {

    let endPoint = "api/events/"+id
    //myHttp needs to match what i called it on lined10 in constructor
    return this.myHttp.get(`${this.BASE_URL}/api/events/${id}`)
        .map((res) =>  res.json());
  }
  }
