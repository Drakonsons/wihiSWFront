import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  username!: string;
  email!: string;
  password!: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    console.log(this.registerForm);
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const userData = this.registerForm.value;
    console.log(userData);

    this.http.post('http://localhost:8080/auth/register', userData).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
