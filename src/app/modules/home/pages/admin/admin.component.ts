import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  usersData: IUser[] = [];
  constructor(private location: Location, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response) => {
      this.usersData = response;
    });
  }

  goBack() {
    this.location.back();
  }
}
