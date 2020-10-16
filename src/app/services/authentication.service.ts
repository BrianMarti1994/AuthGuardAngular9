import { Injectable } from '@angular/core';
import{loginData}from '../model/loginData';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockUser: loginData = new loginData('Admin', '123');
  isAuthenticated = false;
  constructor(private router: Router) { }

  authenticate(loginData: loginData): boolean {
  
    if (this.getCredentials(loginData)) {
      this.isAuthenticated = true;
      this.router.navigate(['Home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private getCredentials(loginData: loginData): boolean {
    return this.checkUsername(loginData.getLogin()) && this.checkPassword(loginData.getPassword());
  }
  private checkUsername(username: string): boolean {
    return username === this.mockUser.getLogin();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }
  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
