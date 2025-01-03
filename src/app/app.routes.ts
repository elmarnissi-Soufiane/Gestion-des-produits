import { Routes } from "@angular/router";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ProdcutsComponent } from "./components/prodcuts/prodcuts.component";
import { authGuard } from "./auth.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // Redirige vers login par défaut
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'prodcuts',
    component: ProdcutsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: '/not-found', // Par défaut, redirige vers login si la route est invalide
  },
];
