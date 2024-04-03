import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IAssessment } from '../../interfaces/IAssessment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  assessmentList: IAssessment[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserAssessments().subscribe(
      (response) => {
        // console.log(response);
        this.assessmentList = response;
      },
      (error) => {
        console.error('Getting User Assessments failed: ', error);
      }
    );
  }
}
