import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {
BASE_URL: string = 'http://localhost:3000';

  constructor(private myHttp: Http) { }

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/events`)
    //take magical array i receive and turn it into json which we use
      .map((res) =>  res.json());
  }


  }
