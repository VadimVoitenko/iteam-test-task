import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isAdmin(): boolean {
    if (localStorage.getItem('role') === 'Admin') {
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
