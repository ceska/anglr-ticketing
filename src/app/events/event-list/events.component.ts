import { Component, OnInit } from '@angular/core';
import { Event } from '../../event';
import { EventService } from '../../event.service';
import { MessageService } from '../../message.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[];
  selectedEvent: Event;
  form: FormGroup;

  constructor(private eventService: EventService, private messageService: MessageService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getEvents();
  }
  
  getEvents(): void {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }

  showDetails(id:number): void {
    this.eventService.getEvent(id).subscribe(event => this.selectedEvent = event);
    // if(this.selectedEvent) {
    //   this.form = this.fb.group({
    //     title: [this.selectedEvent.title],
    //     description: [this.selectedEvent.description],
    //     location: [this.selectedEvent.location],
    //     ticketNo: [this.selectedEvent.ticketNo],
    //     ticketSold: [this.selectedEvent.ticketSold]
    //   });
    // }
  }

  edit():void {
    console.log("hi");
    // this.eventService.editEvent(this.event).subscribe();
  }

}