import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  token: string | null;
  error: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: any | null;  // Ajoutez l'utilisateur
}

export const initialState: AuthState = {
  token: null,
  error: null,
  isAuthenticated: false,
  loading: false,
  user: null,  // Initialisez l'utilisateur à null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuthActions.loginSuccess, (state, { token, user }) => ({
    ...state,
    token,
    isAuthenticated: true,
    loading: false,
    error: null,
    user,  // Stockez l'utilisateur dans l'état
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    token: null,
    isAuthenticated: false,
    loading: false,
    error,
    user: null,  // Si l'échec de connexion, effacer les données utilisateur
  })),
  on(AuthActions.logout, () => initialState)  // Réinitialise l'état à la déconnexion
);
