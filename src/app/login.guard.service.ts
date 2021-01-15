import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  isLoggedIn = false;
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val=> this.isLoggedIn = true)
    )
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  // isLoggedIn(): boolean {
  //   return false;
  // }
  // getToken() {
  //   return !!localStorage.getItem("SessionUser");
  // }

}
