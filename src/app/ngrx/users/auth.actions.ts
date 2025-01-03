import { createAction, props } from '@ngrx/store';

// Tentative de login
export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

// Succès du login
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: string; user: any }>()  // Inclure l'utilisateur dans l'action
);
// Échec du login
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

// Déconnexion
export const logout = createAction('[Auth] Logout');
