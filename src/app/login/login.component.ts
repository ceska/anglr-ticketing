import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginGuardService } from '../login.guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message: string;

  constructor(public auth: LoginGuardService, public router: Router) { 
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.auth.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.auth.login().subscribe(() => {
      this.setMessage();
      if (this.auth.isLoggedIn) {
        const redirectUrl = '/editor';
        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout() {
    this.auth.logout();
    this.setMessage();
  }
}