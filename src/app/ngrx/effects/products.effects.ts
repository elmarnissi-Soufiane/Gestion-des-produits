// Alors en va avoir importer les actions, car le reducer il essaye de recois les donnes de puis action

import { Injectable } from '@angular/core';
import { ProductserviceService } from '../../services/productservice.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import {
  DeleteProductErrorAction,
  DeleteProductSuccesAction,
  EditProductErrorAction,
  EditProductSuccesAction,
  NewProductSuccesAction,
  ProdctsActionsTypes,
  SaveProductErrorAction,
  SaveProductSuccesAction,
  UpdateProductErrorAction,
  UpdateProductSuccesAction,
} from '../actions/products.actions';

import {
  GetAllProductsErrorAction,
  GetAllProductsSuccesAction,
  GetAvailableProductsSuccesAction,
  ProductsActions,
  SearchProductsErrorAction,
  SearchProductsSuccesAction,
} from '../actions/products.actions';

// ex:
// componenet => Action => Reducers
//            => Action => Effects
// Effects => Services
// Actions <= Effects
// Actions => Reducers

// on va creer un service injectable pour recuperer les donnes depuis Effects
@Injectable()
export class ProdcutsEffects {
  // utilisation des services
  constructor(
    private productserviceService: ProductserviceService,
    // attribt de effects qui prendre action
    private effectAction: Actions
  ) {}

  // creation d'une function d'effet get all producters recu depuis action et effects
  // trouves l'effect
  getAllProductsEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProdctsActionsTypes.GET_ALL_PRODCTS),
      mergeMap((action: ProductsActions) =>
        this.productserviceService.getAllProducts().pipe(
          map((data) => new GetAllProductsSuccesAction(data)),
          catchError((error) =>
            of(new GetAllProductsErrorAction(error.message))
          )
        )
      )
    )
  );

  // selected
  getSelectedProductsEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProdctsActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action: ProductsActions) =>
        this.productserviceService.getSelectedProducts().pipe(
          map((data) => new GetAllProductsSuccesAction(data)),
          catchError((error) =>
            of(new GetAllProductsErrorAction(error.message))
          )
        )
      )
    )
  );

  // Avaliable
  getAvaliableProductsEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProdctsActionsTypes.GET_AVALIABLE_PRODUCTS),
      mergeMap((action: ProductsActions) =>
        this.productserviceService.getAvailableProducts().pipe(
          map((data) => new GetAvailableProductsSuccesAction(data)),
          catchError((error) =>
            of(new GetAllProductsErrorAction(error.message))
          )
        )
      )
    )
  );

  // Search
  searchProductEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProdctsActionsTypes.SEARCH_PRODUCTS),
      mergeMap((action: ProductsActions) =>
        this.productserviceService.searchProduts(action.payload).pipe(
          map((data) => new SearchProductsSuccesAction(data)),
          catchError((error) =>
            of(new SearchProductsErrorAction(error.message))
          )
        )
      )
    )
  );

  // save Enregistrer product
  saveProductsEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProdctsActionsTypes.SAVE_PRODUCT),
      mergeMap((action: ProductsActions) =>
        this.productserviceService.saveProduct(action.payload).pipe(
          map((product) => new SaveProductSuccesAction(product)),
          catchError((error) => of(new SaveProductErrorAction(error.message)))
        )
      )
    )
  );

  // Ajouter
  newProductEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProdctsActionsTypes.NEW_PRODUCT),
      map((action: ProductsActions) => {
        return new NewProductSuccesAction({});
      })
    )
  );

  // Delete
  deleteProductsEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProdctsActionsTypes.DELETE_PRODUCT),
      mergeMap((action: ProductsActions) =>
        this.productserviceService.deleteProdcut(action.payload).pipe(
          // Utilisation correcte de l'objet produit
          map(() => new DeleteProductSuccesAction(action.payload)),
          catchError((error) => of(new DeleteProductErrorAction(error.message)))
        )
      )
    )
  );

  // Edit
  editProductEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProdctsActionsTypes.EDIT_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productserviceService.getProductById(action.payload).pipe(
          map((data) => {
            return new EditProductSuccesAction(data);
          }),
          catchError((error) => of(new EditProductErrorAction(error.message)))
        );
      })
    )
  );

  //Update
  updateProductEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectAction.pipe(
      ofType(ProdctsActionsTypes.UPDATE_PRODUCT),
      mergeMap((action: ProductsActions) =>
        this.productserviceService.updateProduct(action.payload).pipe(
          map((data) => new UpdateProductSuccesAction(data)),
          catchError((error) => of(new UpdateProductErrorAction(error.message)))
        )
      )
    )
  );
}
