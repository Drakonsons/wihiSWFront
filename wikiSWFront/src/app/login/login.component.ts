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
  password!: string;

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
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;

    this.userService.login(username, password).subscribe(
      (response: any) => {
        if (response.token) {
          this.router.navigate(['/films']);
        } else {
          alert("Nom d'utilisateur ou mot de passe incorrect");
        }
      },
      (error: any) => {
        alert('Échec de la connexion. Veuillez réessayer plus tard.');
      }
    );
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }
}
