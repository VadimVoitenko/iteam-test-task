import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { IAssessment } from '../interfaces/IAssessment';
import { IAssessmentGraph } from '../interfaces/IAssessmentGraph';
import { IUser } from '../interfaces/IUser';
import { API_ROUTES } from 'src/app/shared/api/routes';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserAssessments(): Observable<IAssessment[]> {
    const headers = {
      'X-Token': '' + this.authService.getToken(),
    };
    return this.http.get<IAssessment[]>(API_ROUTES.USERASSESSMENTS, {
      headers,
    });
  }

  getUserAssessmentGraphById(id: number): Observable<IAssessmentGraph> {
    const headers = {
      'X-Token': '' + this.authService.getToken(),
    };
    return this.http.get<IAssessmentGraph>(
      API_ROUTES.USERASSESSMENTS_GRAPH + id,
      { headers }
    );
  }

  getUsers(): Observable<IUser[]> {
    const headers = {
      'X-Token': '' + this.authService.getToken(),
    };
    return this.http.get<IUser[]>(API_ROUTES.USERS, { headers });
  }
}
