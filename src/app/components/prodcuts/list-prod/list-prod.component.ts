import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProductStateReducersServices } from '../../../ngrx/reducers/products.reducers';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import {
  DeleteProductAction,
  onAvaliableProductAction,
  onSelectedProductAction,
} from '../../../ngrx/actions/products.actions';
import { Product } from '../../../models/prodcuts';

@Component({
  selector: 'app-list-prod',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-prod.component.html',
  styleUrls: ['./list-prod.component.css'],
})
export class ListProdComponent implements OnInit {
  @Input() state: ProductStateReducersServices | null = null;
  product: Product | null = null;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  onDeleteProduct(product: Product) {
    if (!product.id) {
      console.error('Product ID is missing:', product);
      return;
    }
    console.log('Product ID is no missing:', product);
    this.store.dispatch(new DeleteProductAction(product));
  }

  onUpdateProduct(product: Product) {
    this.router.navigateByUrl('/editProduct/' + product.id);
  }

  onAvaliableProduct(product: Product) {
    console.log('avaliable');
    this.store.dispatch(new onAvaliableProductAction(product));
  }

  onSelectProduct(product: Product) {
    this.store.dispatch(new onSelectedProductAction(product));
    console.log('Selected');
  }
}
