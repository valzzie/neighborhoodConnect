///this page will display all neighbors attending a specific event:myId
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EventsService } from '../services/events.service';
import { environment } from '../../environments/environment';


//
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent implements OnInit {

myEventId: number;
myEventInfo: any;
neighbors: any;
baseUrl = environment.apiBase;
  constructor(
    private myAuthService: ActivatedRoute,
    private myEventsService: EventsService,
    private myActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.myActivatedRoute.params.subscribe((actualParams) => {
      console.log(actualParams.myId);
      this.myEventId = actualParams.myId;
      this.getInfo();
    })
  }

  getInfo() {
    this.myEventsService.getOne(this.myEventId).subscribe((eventInfo) => {
      console.log(eventInfo);
      this.myEventInfo = eventInfo;
      this.neighbors = eventInfo.peopleAttending;
    })
  }
}
