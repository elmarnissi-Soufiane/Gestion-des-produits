import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductStateReducersServices } from '../../../ngrx/reducers/products.reducers';
import {
  GetAllProductsAction,
  GetAvailableProductsAction,
  GetSelectedProductsAction,
  SearchProductsAction,
} from '../../../ngrx/actions/products.actions';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-prod',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav-bar-prod.component.html',
  styleUrl: './nav-bar-prod.component.css',
})
export class NavBarProdComponent implements OnInit {
  state: ProductStateReducersServices | null = null;

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.state = state.catalogueState;
    });
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}));
    console.log('État actuel du catalogue Navabr:', this.state);
  }
  onGetAllProductsSelected() {
    this.store.dispatch(new GetSelectedProductsAction({}));
    console.log('Selected:', this.state);
  }
  onGetAllProductsAvailable() {
    this.store.dispatch(new GetAvailableProductsAction({}));
    console.log('Avaliable:', this.state);
  }

  onSearch(dataForm: any) {
    if (dataForm.keyword && dataForm.keyword.trim() !== '') {
      this.store.dispatch(new SearchProductsAction(dataForm.keyword.trim()));
      console.log('Seacrh : ', this.state);
    } else {
      console.warn('Le mot-clé est vide.');
    }
  }

  onNewProduct() {
    this.router.navigateByUrl('/newProduct');
  }
}
