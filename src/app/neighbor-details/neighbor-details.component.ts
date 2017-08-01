//for specific neighbor: myId will show the events they are attending
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EventsService } from '../services/events.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-neighbor-details',
  templateUrl: './neighbor-details.component.html',
  styleUrls: ['./neighbor-details.component.css']
})
export class NeighborDetailsComponent implements OnInit {

myNeighborId: number;
myNeighborInfo: any;
events: any;
baseUrl = environment.apiBase;
  constructor(
    private myAuthService: ActivatedRoute,
    private myEventsService: EventsService,
    private myActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.myActivatedRoute.params.subscribe((neighborParams) => {
      console.log("Actual Neighbor Params", neighborParams);
      console.log("Actual Neighbor Parmas.myId", neighborParams.myId);
      this.myNeighborId = neighborParams.myId;
      this.getInfo();
    })
  }
//using a neighborId pull the events they are attending.
  getInfo() {
    //for specific eventid get the event info and the people attending that event.
//this needs to refer to myAuthService********
    this.myEventsService.getOne(this.myNeighborId).subscribe((neighborInfo) => {
      console.log("Neighbor Info",neighborInfo);
      this.myNeighborInfo = neighborInfo;
      this.events = neighborInfo.eventsAttending;
    })
  }
}
