import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: Event;
  purchase = false;

  constructor(private route: ActivatedRoute, private eventService: EventService, private location: Location) { }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id).subscribe(event => this.event = event);
  }

  edit():void {
    this.eventService.editEvent(this.event).subscribe(() => this.goBack());
  }

  delete(): void {
    this.eventService.deleteEvent(this.event).subscribe(() => this.goBack());
  }

  buy(data:string):void { //add validation; must be < ticketNo
    this.event.ticketSold += Number(data);
    this.eventService.editEvent(this.event).subscribe(() => this.goBack());
  }
  
  toggleTicket() {
    this.purchase = true;
  }

  goBack(): void {
    this.location.back(); //return to prev page
  }

}

