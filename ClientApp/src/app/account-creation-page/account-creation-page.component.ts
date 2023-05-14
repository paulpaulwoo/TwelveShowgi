import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { userdata } from '../class-definitions/account';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account-creation-page',
  templateUrl: './account-creation-page.component.html',
  styleUrls: ['./account-creation-page.component.scss']
})
export class AccountCreationPageComponent {
  @Input() username: string;
  @Input() password: string;
  @Input() passwordCheck: string;
  showUsernameError: boolean;
  showPasswordError: boolean;
  showPasswordCheckError: boolean;
  showInvalidSubmissionError: boolean;
  createdAccount: boolean;
  invalidSubmissionMessage: string;

  constructor(private http: HttpClient, private router: Router) {
    this.username = '';
    this.password = '';
    this.passwordCheck = '';

    this.showUsernameError = false;
    this.showPasswordError = false;
    this.showPasswordCheckError = false;
    this.showInvalidSubmissionError = false;
    this.createdAccount = false;
    this.invalidSubmissionMessage = '';
  }


  
  checkUsernameSpecifications(username: string): boolean {
    const regex = /^[^\s\\]{8,15}$/;
    return regex.test(username);
  }

  checkPasswordSpecifications(password: string): boolean {
    const regex = /^[^\s\\]{8,15}$/;
    return regex.test(password);
  }

  checkPasswordMatch(): boolean {
    return this.password == this.passwordCheck;
  }



  handleUsernameChange(): void {
    this.showInvalidSubmissionError = false;
    this.showUsernameError = !this.checkUsernameSpecifications(this.username);
  }

  handlePasswordChange(): void {
    this.showInvalidSubmissionError = false;
    this.showPasswordError = !this.checkPasswordSpecifications(this.password);
    if (this.passwordCheck !== '') {
      this.showPasswordCheckError = this.password !== this.passwordCheck;
    }
    
  }

  handlePasswordCheckChange(): void {
    this.showInvalidSubmissionError = false;
    if (this.passwordCheck !== '') {
      this.showPasswordCheckError = !this.checkPasswordMatch();
    }
    if (this.passwordCheck == '') {
      this.showPasswordCheckError = false
    }
    
  }

  onSubmit(): void {
    console.log(this.username);
    console.log(this.password);
    if (!this.checkUsernameSpecifications(this.username)
      || !this.checkPasswordSpecifications(this.password)
      || !this.checkPasswordMatch()) {
      this.invalidSubmissionMessage = "Please enter valid data";
      this.showInvalidSubmissionError = true;
      return;
    }

    this.http.post(window.location.origin + '/api/create-account/', { "username": this.username, "password": this.password }, { observe: "response" })
      .subscribe(response => {
      // Handle the response from the server
        console.log('Response:', response);
        console.log("Success");
        this.createdAccount = true;
      },
        error => {
            console.log(error)
          if (error.error.code == "1") {
            //invalid username or password
            this.invalidSubmissionMessage = "Please enter valid data";
          } else if (error.error.code == "2") {
            //duplicate username
            this.invalidSubmissionMessage = "Duplicate username, please try again with different username";
          } else {
            this.invalidSubmissionMessage = "Unknown error";
          }
              this.showInvalidSubmissionError = true;
          }
    )
  }

  returnToLogin(): void {
    this.router.navigate(['/login'])
  }



}
