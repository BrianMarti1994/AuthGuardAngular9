import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { loginData } from '../model/loginData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isFormValid = false;
  areCredentialsInvalid = false;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm:NgForm) {
    console.log(loginForm.value.login)
    if (!loginForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
  
    this.checkCredentials(loginForm);
  }

  private checkCredentials(loginForm: NgForm) {

    const signInData = new loginData(loginForm.value.login, loginForm.value.password);
    if (!this.authenticationService.authenticate(signInData)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }
}
