import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  //formcontrol
  name = new FormControl('');

  //formgroup+formArray
  form = this.fb.group({
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  //formgroup+default event val
  eventForm: FormGroup;
  event = {title: 'Salo Salo', description: 'Potluck', no: '34', street: 'Strt', barangay: 'Brng', city: 'City', ticketNo: 100, ticketSold: 15};

  constructor(private fb: FormBuilder) { }

  ngOnInit():void {
    this.eventForm = new FormGroup({
      title: new FormControl(this.event.title, [
        Validators.required,
      ]),
      description: new FormControl(this.event.description, []),
      no: new FormControl(this.event.no),
      street: new FormControl(this.event.street),
      barangay: new FormControl(this.event.barangay),
      city: new FormControl(this.event.city),
      ticketNo: new FormControl(this.event.ticketNo, [
        Validators.required,
        Validators.min(1)
      ]),
      ticketSold: new FormControl(this.event.ticketSold, [
        Validators.max(this.event.ticketNo)
      ])
    });
  }

  updateName() {
    this.name.setValue('cale');
  }

  get aliases() {
    return this.form.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  add() {}

}