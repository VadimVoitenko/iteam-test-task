import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  isAdmin(): boolean {
    if (this.localStorageService.getItem('role') === 'Admin') {
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
