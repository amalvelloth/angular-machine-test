import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'touchworld' && this.password === 'touchworldTech') {
      this.router.navigate(['/employees']);
    } else {
      this.errorMessage = 'Invalid Username or Password';
    }
  }
}
