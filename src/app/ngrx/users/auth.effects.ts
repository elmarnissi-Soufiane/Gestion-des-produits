import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { LoginService } from '../../services/login.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private loginService: LoginService) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            mergeMap(({ email, password }) =>
                this.loginService.login(email, password).pipe(
                    map((token) => {
                        if (token) {
                            const user = { email, name: email.split('@')[0] };  // Exemple de récupération de l'utilisateur
                            return AuthActions.loginSuccess({ token, user });
                        } else {
                            return AuthActions.loginFailure({
                                error: 'Invalid email or password',
                            });
                        }
                    }),
                    catchError((error) =>
                        of(AuthActions.loginFailure({ error: error.message }))
                    )
                )
            )
        )
    );
}
