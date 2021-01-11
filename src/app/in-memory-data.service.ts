import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Event } from './event';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const events = [
      {id: 1, title: 'New Year Get-together', description: 'For Company X', location: 'Newtown Hotel', ticketNo: 200, ticketSold: 130},
      {id: 2, title: 'Bloom Concert', description: 'Panagbenga concert feat. XX', location: 'Session Road', ticketNo: 500, ticketSold: 276},
      {id: 3, title: 'Fundraiser for Charity', description: 'Raising P8000 for charity TT~', location: 'Burnham Park - Rose Garden', ticketNo: 250, ticketSold: 250},
      {id: 4, title: 'AA Birthday Party', description: 'For friends of AA only!', location: 'AA Address', ticketNo: 50, ticketSold: 13},
      {id: 5, title: 'Christmas Party', description: 'For Batch 2020 of Z University', location: 'Z University Gym', ticketNo: 1000, ticketSold: 747},
    ];
    return {events};
  }

  // if array = empty, return 11; else, return highest id + 1
  genId(events: Event[]): number {
    return events.length > 0 ? Math.max(...events.map(event => event.id)) + 1 : 11;
  }
}