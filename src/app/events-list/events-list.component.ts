import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  providers: [EventsService]
})
export class EventsListComponent implements OnInit {
events = [];
baseUrl = environment.apiBase;

myCoolUploader = new FileUploader({
 url: 'http://localhost:3000/api/events'
 });

  constructor(private myEventsService: EventsService) { }

  ngOnInit() {
    this.myEventsService.getList()
    .subscribe((myEventList) =>{
      // only push events in specific zipcode to the eventArray.
      // Then set the eventArray equal to the events array on line 10
      // which is the array used to display events on event page.

    var eventArray = [];
      myEventList.forEach(function(event) {

        if (event.zipcode === "30020"){
          eventArray.push(event);
          console.log(event);
        }
      });

      this.events = eventArray
      console.log(this.events);
    });
  }

}
