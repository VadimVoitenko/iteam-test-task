import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { LocalStorageService } from 'src/app/modules/auth/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  isAdmin(): boolean {
    if (this.localStorage.getItem('role') === 'Admin') {
      return true;
    } else {
      return false;
    }
  }

  toAdminPage() {
    this.router.navigate(['/dashboard/admin']);
  }

  logout() {
    this.authService.logout();
  }
}
