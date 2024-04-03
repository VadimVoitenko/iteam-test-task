import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from 'src/app/modules/home/interfaces/IUser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  @Input() usersData: IUser[] = [];

  displayedColumns: string[] = [
    'name',
    'lastName',
    'dateOfBirth',
    'education',
    'role',
    'position',
  ];
  dataSource = new MatTableDataSource<IUser>();

  ngOnChanges(): void {
    this.dataSource.data = this.usersData;
  }
}
