import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { productReducers } from './ngrx/reducers/products.reducers';
import { ProdcutsEffects } from './ngrx/effects/products.effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { authReducer } from './ngrx/users/auth.reducer';
import { AuthEffects } from './ngrx/users/auth.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    HttpClientModule,
    //provideHttpClient(),
    provideHttpClient(withFetch()),
    provideStore({
      catalogueState: productReducers, // appel du fonction de reducers continet tous les actions qui on utiliser sur store pour recupere donnes
      authState: authReducer, // Reducer pour l'authentification
    }),
    provideEffects([ProdcutsEffects, AuthEffects]), // en mettre la calass Injectable d'effect
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      connectInZone: true,
    }), provideAnimationsAsync(), provideAnimationsAsync(),
  ],
};

 