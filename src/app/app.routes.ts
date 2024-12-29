import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdcutsComponent } from './components/prodcuts/prodcuts.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddProdComponent } from './pages/add-prod/add-prod.component';
import { EditProdComponent } from './pages/edit-prod/edit-prod.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', // Obligatoire pour une redirection complète
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
    path: 'newProduct',
    component: AddProdComponent,
  },
  {
    path: 'editProduct/:id',
    component: EditProdComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];
