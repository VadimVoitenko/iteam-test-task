import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IAuthCredentials } from '../interfaces/IAuthCredentials';
import { IAuthResponse } from '../interfaces/IAuthResponse';
import { API_ROUTES } from 'src/app/shared/api/routes';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  login(user: IAuthCredentials): Observable<IAuthResponse> {
    this.isLoggedIn = true;
    return this.http.post<IAuthResponse>(API_ROUTES.LOGIN, user);
  }

  logout() {
    this.isLoggedIn = false;
    this.localStorage.clear();
    this.router.navigateByUrl(API_ROUTES.LOGIN);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
