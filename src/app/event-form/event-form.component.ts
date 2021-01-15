import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  events: Event[] = [];
  submitted = false;

  eventForm = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    location: ['', Validators.required],
    ticketNo: ['', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')]],
  })

  constructor(private eventService: EventService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  add(): void {
    this.submitted = true;
    this.events.push({
      title: this.eventForm.get('title').value,
      description: this.eventForm.get('description').value,
      location: this.eventForm.get('location').value,
      ticketNo: this.eventForm.get('ticketNo').value,
      ticketSold: 0
    });
    this.eventService.addEvent(this.events[0]).subscribe();
  }

}