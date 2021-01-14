import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './event-list/events.component';
import { EventChildComponent } from './event-child/event-child.component';

const eventRoutes: Routes = [
  {path: '', component: EventsComponent, children: [
    {path: ':id', component: EventChildComponent }
  ]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(eventRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EventsRoutingModule { }
