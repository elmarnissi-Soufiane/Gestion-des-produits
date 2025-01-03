import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer'; // Chemin correct vers ton reducer

// Sélecteur pour obtenir l'état complet d'authentification
export const selectAuthState = createFeatureSelector<AuthState>('auth');

// Sélecteur pour vérifier si l'utilisateur est authentifié, avec une protection contre undefined
export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (state: AuthState | undefined) => state ? state.isAuthenticated : false
);
