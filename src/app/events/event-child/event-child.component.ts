import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Event } from '../../event';

@Component({
  selector: 'app-event-child',
  templateUrl: './event-child.component.html',
  styleUrls: ['./event-child.component.css']
})
export class EventChildComponent implements OnInit {
  @Input() selectedEvent: Event;
  // @Input() form: FormGroup;
  @Output() event = new EventEmitter<any>();
  editForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.editForm = this.fb.group({
    //   title: ['', Validators.required],
    //   description: [''],
    //   location: ['', Validators.required],
    //   ticketNo: ['', Validators.min(1)],
    //   ticketSold: ['']
    // });
  }

  ngOnChanges(): void {
    // if (this.form) {
    //   this.editForm = this.fb.group({
    //     title: [this.form., Validators.required],
    //     description: [''],
    //     location: ['', Validators.required],
    //     ticketNo: ['', Validators.min(1)],
    //     ticketSold: ['']
    //   });
    // }
  }

  onSubmit(form: FormGroup) {
    console.log(form);
    // this.event.emit(form);
  }

}
