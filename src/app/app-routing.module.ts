import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  {path: 'events/:id', component: EventDetailsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'create', component: EventFormComponent},
  {path: 'editor', component: EditorComponent},
  {path: '**', redirectTo: '/events', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
