import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import {
  EtatProductStateEnum,
  ProductStateReducersServices,
} from '../../ngrx/reducers/products.reducers';
import { map, Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ListProdComponent } from './list-prod/list-prod.component';
import { NavBarProdComponent } from './nav-bar-prod/nav-bar-prod.component';

@Component({
  selector: 'app-prodcuts',
  standalone: true,
  imports: [
    HttpClientModule,
    ListProdComponent,
    NavBarProdComponent,
    AsyncPipe,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './prodcuts.component.html',
  styleUrl: './prodcuts.component.css',
})
export class ProdcutsComponent implements OnInit {
  readonly etatProductStateEnum = EtatProductStateEnum;

  //state: ProductStateReducersServices | null = null;
  ProductStateReducersServices$: Observable<ProductStateReducersServices> | null =
    null;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.ProductStateReducersServices$ = this.store.pipe(
      map((state) => state.catalogueState)
    );
  }
}
