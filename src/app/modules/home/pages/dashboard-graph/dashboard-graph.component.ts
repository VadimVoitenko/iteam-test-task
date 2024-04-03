import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IAssessmentGraph } from '../../interfaces/IAssessmentGraph';

@Component({
  selector: 'app-dashboard-graph',
  templateUrl: './dashboard-graph.component.html',
  styleUrls: ['./dashboard-graph.component.scss'],
})
export class DashboardGraphComponent implements OnInit {
  userGraph!: IAssessmentGraph;
  id!: number;

  constructor(
    private location: Location,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
      this.getGraphById(this.id);
    });
  }

  getGraphById(id: number): void {
    this.userService
      .getUserAssessmentGraphById(id)
      .subscribe((response: IAssessmentGraph) => {
        this.userGraph = response;
      });
  }

  goBack() {
    this.location.back();
  }
}
