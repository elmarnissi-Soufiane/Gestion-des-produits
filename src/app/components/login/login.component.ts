import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../../ngrx/users/auth.reducer';
import { login } from '../../ngrx/users/auth.actions';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { loginSuccess } from '../../ngrx/users/auth.actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, CommonModule, ReactiveFormsModule, MatError, MatIcon, MatLabel,
    MatFormField, MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error$!: Observable<string | null>;  // Observable for error

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<{ authState: AuthState }>
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // Subscribe to the error state to show error messages
    this.error$ = this.store.pipe(select(state => state.authState.error));

    // Abonnez-vous à l'état d'authentification pour rediriger après la connexion
    this.store.pipe(select(state => state.authState.isAuthenticated)).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        // Si l'utilisateur est authentifié, redirigez vers la page d'accueil
        this.router.navigateByUrl('/home'); // Rediriger vers le composant Home
      }
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.store.dispatch(login({ email, password }));
    }
  }
}
