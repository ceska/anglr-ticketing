import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginGuardService } from './login.guard.service';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventsModule } from './events/events.module';
import { EventTableComponent } from './event-table/event-table.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    EventFormComponent,
    EventTableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    EventsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Remove below when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    NoopAnimationsModule 
  ],
  providers: [
    LoginGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
