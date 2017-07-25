import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  providers: [EventsService]
})
export class EventsListComponent implements OnInit {
events = [];
  constructor(private myEventsService: EventsService) { }

  ngOnInit() {
    this.myEventsService.getList()
    .subscribe((myEventList) =>{
      this.events = myEventList;
      console.log(myEventList);
    });
  }

}
