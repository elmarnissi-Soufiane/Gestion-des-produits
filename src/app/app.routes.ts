import { Routes } from "@angular/router";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ProdcutsComponent } from "./components/prodcuts/prodcuts.component";

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
  },
  {
    path: 'prodcuts',
    component: ProdcutsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found', // Par défaut, redirige vers login si la route est invalide
  },
];
