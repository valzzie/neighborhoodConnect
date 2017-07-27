import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EventsService } from '../services/events.service';
//
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent implements OnInit {

myEventId: number;

  constructor(
    private myAuthService: ActivatedRoute
  ) { }

  ngOnInit() {
    this.myAuthService.params.subscribe((actualParams) => {
      this.myEventId = actualParams.myId;
    })
  }

}
