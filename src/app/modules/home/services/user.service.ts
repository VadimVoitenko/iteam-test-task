import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAssessment } from '../interfaces/IAssessment';
import { IAssessmentGraph } from '../interfaces/IAssessmentGraph';
import { IUser } from '../interfaces/IUser';
import { API_ROUTES } from 'src/app/shared/api/routes';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  getUserAssessments(): Observable<IAssessment[]> {
    const headers = {
      'X-Token': '' + this.localStorageService.getItem('X-Token'),
    };
    return this.http.get<IAssessment[]>(API_ROUTES.USERASSESSMENTS, {
      headers,
    });
  }

  getUserAssessmentGraphById(id: number): Observable<IAssessmentGraph> {
    const headers = {
      'X-Token': '' + this.localStorageService.getItem('X-Token'),
    };
    return this.http.get<IAssessmentGraph>(
      API_ROUTES.USERASSESSMENTS_GRAPH_BY_ID(id),
      { headers }
    );
  }

  getUsers(): Observable<IUser[]> {
    const headers = {
      'X-Token': '' + this.localStorageService.getItem('X-Token'),
    };
    return this.http.get<IUser[]>(API_ROUTES.USERS, { headers });
  }
}
