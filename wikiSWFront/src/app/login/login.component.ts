import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    const { username, password } = this.loginForm.value;

    if (!this.loginForm.valid) {
      return;
    }

    this.userService.login(username, password).subscribe(
      (response) => {
        if (response.success) {
          this.router.navigate(['http://localhost:4200/films']);
        } else {
          alert('Invalid username or password');
        }
      },
      (error: any) => {
        alert('Login failed. Please try again later.');
      }
    );
    console.log(this.loginForm.value);
  }
}
