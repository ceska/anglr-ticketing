import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.css']
})
export class EventTableComponent implements OnInit {

  toSave: Event;
  mainTable: FormGroup;
  control: FormArray;
  touchedRows: any;

  constructor(private fb: FormBuilder, private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
    this.mainTable = this.fb.group({
      tableRows: this.fb.array([])
    });
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(event => this.addRow(event));
  }

  getControl(): FormArray {
    return this.mainTable.get('tableRows') as FormArray;
  }

  addRow(event: Event[]) {
    this.control = this.getControl();
    event.forEach((e) => {
      this.control.push(this.initiateForm(e));
    })
  }

  initiateForm(event: Event): FormGroup { // creates form per row
    return this.fb.group({
      id: [event.id],
      title: [event.title, Validators.required],
      description: [event.description],
      location: [event.location, Validators.required],
      ticketNo: [event.ticketNo, [Validators.required, Validators.min(1)]],
      ticketSold: [event.ticketSold, Validators.max(event.ticketNo)],
      isEditable: [false]
    });
  }

  get getFormControls() {
    return this.getControl();
  }

  editRow(group: FormGroup) {
    group.get('isEditable').setValue(true);
  }

  deleteRow(group: FormGroup, index: number) {
    this.control = this.getControl();
    this.control.removeAt(index);
    this.bindEvent(group);
    this.eventService.deleteEvent(this.toSave).subscribe();
  }

  saveRow(group: FormGroup, index: number) {
    group.get('isEditable').setValue(false);
    if(group.touched) {
      this.bindEvent(group);
      this.eventService.editEvent(this.toSave).subscribe();
    }
  }

  bindEvent(group:FormGroup): Event {
    this.toSave = {
      id: group.get('id').value,
      title: group.get('title').value,
      description: group.get('description').value,
      location: group.get('location').value,
      ticketNo: group.get('ticketNo').value,
      ticketSold: group.get('ticketSold').value
    }
    return this.toSave;
  }
}