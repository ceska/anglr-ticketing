import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsComponent } from './event-list/events.component';
import { EventChildComponent } from './event-child/event-child.component';
import { EventsRoutingModule } from './events-routing.module'; 

@NgModule({
  declarations: [
    EventsComponent,
    EventChildComponent
  ],
  imports: [ 
    CommonModule,
    EventsRoutingModule
  ],
  exports: [
    EventsComponent,
    // EventChildComponent
  ]
})
export class EventsModule { }