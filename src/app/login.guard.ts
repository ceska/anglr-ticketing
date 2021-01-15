import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

import { LoginGuardService } from './login.guard.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private auth: LoginGuardService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): true|UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): true|UrlTree {
    if (this.auth.isLoggedIn) { return true; }

    this.auth.redirectUrl = url; //store url
    return this.router.parseUrl('/login');
  }

  // constructor(private auth: LoginGuardService) {}
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     if (this.auth.isLoggedIn()) {
  //       return true;
  //     }
  //     window.alert('You don\'t have permission to view this page');
  //     return false;
  // }

  // canActivate(): boolean {  
  //   if (!this.auth.getToken()) {  
  //       this.router.navigateByUrl("/login");  
  //   }  
  //   return this.auth.getToken();  
  // }  

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
}
