import { Component, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IAssessment } from 'src/app/modules/home/interfaces/IAssessment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnChanges {
  @Input() usersAssessmentData: IAssessment[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'users_resolved',
    'active',
    'image_url',
  ];
  dataSource = new MatTableDataSource<IAssessment>();

  ngOnChanges(): void {
    this.dataSource.data = this.usersAssessmentData;
  }
}
