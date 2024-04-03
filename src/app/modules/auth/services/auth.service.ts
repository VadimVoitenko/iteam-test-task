import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IAuthCredentials } from '../interfaces/IAuthCredentials';
import { IAuthResponse } from '../interfaces/IAuthResponse';
import { API_ROUTES } from 'src/app/shared/api/routes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  login(user: IAuthCredentials): Observable<IAuthResponse> {
    this.isLoggedIn = true;
    return this.http.post<IAuthResponse>(API_ROUTES.LOGIN, user);
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('X-Token');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
