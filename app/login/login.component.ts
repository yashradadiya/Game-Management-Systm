import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string='yash';
  password: string='1234';
  // error: string='Try Again !!!';

  constructor(private router: Router) { }

  onSubmit() {
    // Authenticate user here
    if (this.username === 'yash' && this.password === '1234')
    {
      // Navigate to home page if authentication succeeds
      this.router.navigate(['./home']);
    }
  }
}