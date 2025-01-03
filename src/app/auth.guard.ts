import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as fromAuthSelectors from './ngrx/users/auth.selector'; // Chemin vers tes sélecteurs
import { AuthState } from './ngrx/users/auth.reducer'; // Assure-toi que ce chemin est correct

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AuthState>); // Injecter le store
  const router = inject(Router); // Injecter le router

  return store.pipe(
    select(fromAuthSelectors.selectIsAuthenticated), // Utiliser le sélecteur pour récupérer isAuthenticated
    take(1), // Prendre la première valeur émise
    map((isAuthenticated) => {
      if (!isAuthenticated) {
        // Si l'utilisateur n'est pas authentifié, rediriger vers la page de login
        router.navigate(['/login']);
        return false; // Empêcher l'accès à la route protégée
      }
      return true; // Autoriser l'accès à la route
    })
  );
};
