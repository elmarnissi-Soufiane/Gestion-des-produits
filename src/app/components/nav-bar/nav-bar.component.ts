import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from '../../ngrx/users/auth.reducer';
import { logout } from '../../ngrx/users/auth.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {

  user$!: Observable<any>;  // Observable pour l'utilisateur
  isAuthenticated$!: Observable<boolean>;

  constructor(private router: Router, private store: Store<{ authState: AuthState }>) { }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(state => state.authState.user));
    this.isAuthenticated$ = this.store.pipe(select(state => state.authState.isAuthenticated));
  }

  navigateHome() {
    this.router.navigateByUrl('/home');
  }

  navigateProduct() {
    this.router.navigateByUrl('/prodcuts');
  }

  navigateContact() {
    this.router.navigateByUrl('/contact');
  }

  logout(): void {
    this.store.dispatch(logout());
    this.router.navigateByUrl('/login');
  }

}
