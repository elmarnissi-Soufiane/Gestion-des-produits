import { Action } from '@ngrx/store';
import { Product } from '../../models/prodcuts';

// Ennumeration pour chaque event de le class Product
export enum ProdctsActionsTypes {
  // creation des eveneements

  // All
  GET_ALL_PRODCTS = '[products] Get All Product',
  GET_ALL_PRODCTS_SUCCESS = '[products] Get All Product successfully',
  GET_ALL_PRODCTS_FAIL = '[products] Get All Product failed',

  // Selected
  GET_SELECTED_PRODUCTS = '[Product] Get Selected products',
  GET_SELECTED_PRODUCTS_SUCCESS = '[Products] Get Selected products successfully',
  GET_SELECTED_PRODUCTS_FAIL = '[Products] Get Selected products Error',

  // Avaliable
  GET_AVALIABLE_PRODUCTS = '[Product] Get Available products',
  GET_AVALIABLE_PRODUCTS_SUCCESS = '[Products] Get Available products successfully',
  GET_AVALIABLE_PRODUCTS_FAIL = '[Products] Get Available products Error',

  // Search
  SEARCH_PRODUCTS = '[Product] Serach product',
  SEARCH_PRODUCTS_SUCCESS = '[Products] Search product successfully',
  SEARCH_PRODUCTS_FAIL = '[Products] Search product  Error',

  // Save
  SAVE_PRODUCT = '[Product] Save  product',
  SAVE_PRODUCT_SUCCESS = '[Products] Save product successfully',
  SAVE_PRODUCT_FAIL = '[Products] Save product  Error',

  // Ajouter
  NEW_PRODUCT = '[Product] Ajouter  product',
  NEW_PRODUCT_SUCCESS = '[Product] Ajouter product successfully',
  NEW_PRODUCT_FAIL = '[Products] Ajouter product  Error',

  // Delete
  DELETE_PRODUCT = '[Product] Supprimer  product',
  DELETE_PRODUCT_SUCCESS = '[Product] Supprimer product successfully',
  DELETE_PRODUCT_FAIL = '[Product] Supprimer product  Error',

  // Edit
  EDIT_PRODUCT = '[Product] Edit  product',
  EDIT_PRODUCT_SUCCESS = '[Product] Edit product successfully',
  EDIT_PRODUCT_FAIL = '[Product] Edit product  Error',

  // Update
  UPDATE_PRODUCT = '[Product] Update  product',
  UPDATE_PRODUCT_SUCCESS = '[Product] Update product successfully',
  UPDATE_PRODUCT_FAIL = '[Product] Update product  Error',

  // OnSelected Change
  SELECTED_PRODUCT = '[Product] Selected Product',
  SELECTED_PRODUCT_SUCCESS = '[Products] New Product successfully',
  SELECTED_PRODUCT_FAIL = '[Products] New Product products Error',

  // OnAvaliable Change
  AVAILIABLE_PRODUCT = '[Product] Avaliable Product',
  AVAILIABLE_PRODUCT_SUCCESS = '[Products] Avaliable Selected successfully',
  AVAILIABLE_PRODUCT_FAIL = '[Products] Avaliable Selected Error',
}

// Pour l'action on à deux parameters (payload: string | object ... && type de action 'success, error')
export class GetAllProductsAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.GET_ALL_PRODCTS;
  constructor(public payload: any) {}
}

export class GetAllProductsSuccesAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.GET_ALL_PRODCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class GetAllProductsErrorAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.GET_ALL_PRODCTS_FAIL;
  constructor(public payload: String) {}
}

// Selected
export class GetSelectedProductsAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload: any) {}
}

export class GetSelectedProductsSuccesAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class GetSelectedProductsErrorAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.GET_SELECTED_PRODUCTS_FAIL;
  constructor(public payload: String) {}
}

// Available
export class GetAvailableProductsAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.GET_AVALIABLE_PRODUCTS;
  constructor(public payload: any) {}
}

export class GetAvailableProductsSuccesAction implements Action {
  type: ProdctsActionsTypes =
    ProdctsActionsTypes.GET_AVALIABLE_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class GetAvailableProductsErrorAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.GET_AVALIABLE_PRODUCTS_FAIL;
  constructor(public payload: String) {}
}

// Search
export class SearchProductsAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.SEARCH_PRODUCTS;
  constructor(public payload: string) {}
}

export class SearchProductsSuccesAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class SearchProductsErrorAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.SEARCH_PRODUCTS_FAIL;
  constructor(public payload: String) {}
}

// Save
export class SaveProductAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.SAVE_PRODUCT;
  constructor(public payload: Product) {}
}

export class SaveProductSuccesAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.SAVE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class SaveProductErrorAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.SEARCH_PRODUCTS_FAIL;
  constructor(public payload: String) {}
}

// Ajouter
export class NewProductAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.NEW_PRODUCT;
  constructor(public payload: any) {}
}

export class NewProductSuccesAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.NEW_PRODUCT_SUCCESS;
  constructor(public payload: any) {}
}

export class NewProductErrorAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.NEW_PRODUCT_FAIL;
  constructor(public payload: string) {}
}

// Delete
export class DeleteProductAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.DELETE_PRODUCT;
  constructor(public payload: Product) {}
}

export class DeleteProductSuccesAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class DeleteProductErrorAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.DELETE_PRODUCT_FAIL;
  constructor(public payload: string) {}
}

// Edit or get product by id

export class EditProductAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.EDIT_PRODUCT;
  constructor(public payload: number) {}
}

export class EditProductSuccesAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.EDIT_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class EditProductErrorAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.EDIT_PRODUCT_FAIL;
  constructor(public payload: string) {}
}

// Update
export class UpdateProductAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.UPDATE_PRODUCT;
  constructor(public payload: Product) {}
}

export class UpdateProductSuccesAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class UpdateProductErrorAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.UPDATE_PRODUCT_FAIL;
  constructor(public payload: string) {}
}

// OnSelected Change
export class onSelectedProductAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.SELECTED_PRODUCT;
  constructor(public payload: Product) {}
}

export class onSelectedProductActionSuccess implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.SELECTED_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class onSelectedProductActionError implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.SELECTED_PRODUCT_FAIL;
  constructor(public payload: string) {}
}

// OnAvaliable Change
export class onAvaliableProductAction implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.AVAILIABLE_PRODUCT;
  constructor(public payload: Product) {}
}

export class onAvaliableProductActionSuccess implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.AVAILIABLE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class onAvaliableProductActionError implements Action {
  type: ProdctsActionsTypes = ProdctsActionsTypes.AVAILIABLE_PRODUCT_FAIL;
  constructor(public payload: string) {}
}

// ------------------------------------- //

export type ProductsActions =
  | GetAllProductsAction
  | GetAllProductsSuccesAction
  | GetAllProductsErrorAction
  // selected
  | GetSelectedProductsAction
  | GetSelectedProductsSuccesAction
  | GetSelectedProductsErrorAction
  // Available
  | GetAvailableProductsAction
  | GetAvailableProductsSuccesAction
  | GetAvailableProductsErrorAction
  // Search
  | SearchProductsAction
  | SearchProductsSuccesAction
  | SearchProductsErrorAction
  // Save
  | SaveProductAction
  | SaveProductSuccesAction
  | SaveProductErrorAction
  // New
  | NewProductAction
  | NewProductSuccesAction
  | NewProductErrorAction
  // Delete
  | DeleteProductAction
  | DeleteProductSuccesAction
  | DeleteProductErrorAction
  // Edit
  | EditProductAction
  | EditProductSuccesAction
  | EditProductErrorAction
  // Update
  | UpdateProductAction
  | UpdateProductSuccesAction
  | UpdateProductErrorAction
  // OnSelected Change
  | onSelectedProductAction
  | onSelectedProductActionSuccess
  | onSelectedProductActionError
  // OnAvaliable Change
  | onAvaliableProductAction
  | onAvaliableProductActionSuccess
  | onAvaliableProductActionError;
