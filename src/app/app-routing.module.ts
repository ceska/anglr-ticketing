import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventFormComponent } from './event-form/event-form.component';
import { EventTableComponent } from './event-table/event-table.component';

const routes: Routes = [
  {path: 'create', component: EventFormComponent},
  {path: 'editor', component: EventTableComponent},
  {path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule)},
  {path: '**', redirectTo: '/create', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
