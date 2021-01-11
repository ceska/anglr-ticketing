import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = 'api/events';  // URL to web api
  httpOptions = { // for save reqs
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`${message}`);
  }

  /* data fetch */

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl)
    .pipe(
      tap(_ => this.log(`fetch all events`)),
      catchError(this.handleError<Event[]>('getEvents', [])) //handleError below
    );
  }
  
  getEvent(id: number): Observable<Event> {
    const url = `${this.eventsUrl}/${id}`;
    return this.http.get<Event>(url).pipe(
      tap(_ => this.log(`fetched event ${id}`)),
      catchError(this.handleError<Event>(`getEvent id=${id}`))
    );
  }

  /* CRUD */

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.eventsUrl, event, this.httpOptions).pipe(
      tap(_ => this.log(`added new event`)),
      catchError(this.handleError<Event>('addEvent'))
    );
  }
  
  editEvent(event: Event): Observable<Event> {
    return this.http.put(this.eventsUrl, event, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateEvent'))
    );
  }

  deleteEvent(event: Event | number): Observable<Event> {
    const id = typeof event === 'number' ? event : event.id;
    const url = `${this.eventsUrl}/${id}`;
    return this.http.delete<Event>(url, this.httpOptions).pipe(
      catchError(this.handleError<Event>('deleteEvent'))
    );
  }

  /* error handling */

  private handleError<T>(op = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${error.message}`);
      return of(result as T);
    }
  };
}
