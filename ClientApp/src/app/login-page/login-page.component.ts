import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  username: string;
  password: string;

  constructor(private router: Router) {
    this.username = '';
    this.password = '';
  }
  
  onSubmit() {

  }

  accountCreationClick(): void {
    this.router.navigate(['/accountCreation'])
  }
}
