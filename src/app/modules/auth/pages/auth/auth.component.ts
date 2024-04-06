import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  passwordRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/;

  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailRegex),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(this.passwordRegex),
      ]),
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    this.authService.login({ email, password }).subscribe(
      (response) => {
        this.localStorage.setToken(response.token);
        this.localStorage.setItem('role', response.role);
        this.router.navigate(['dashboard']);
      },
      (error) => {
        console.error('Login failed: ', error);
      }
    );
  }
}
