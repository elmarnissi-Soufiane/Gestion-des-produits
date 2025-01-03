import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  token: string | null;
  error: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: any | null;
}

export const initialState: AuthState = {
  token: null,
  error: null,
  isAuthenticated: false,
  loading: false,
  user: null,
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
    user,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    token: null,
    isAuthenticated: false,
    loading: false,
    error,
    user: null,
  })),
  on(AuthActions.logout, () => initialState)
);
