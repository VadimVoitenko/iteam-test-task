import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://user-assessment-api.vercel.app/';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginPayload = { email, password };
    return this.http.post<any>(this.baseUrl + 'api/login', loginPayload);
  }
}
