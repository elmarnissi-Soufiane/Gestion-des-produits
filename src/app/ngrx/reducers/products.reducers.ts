import { Action } from '@ngrx/store';
import { Product } from '../../models/prodcuts';
import { GetAllProductsAction } from '../actions/products.actions';
import {
  ProdctsActionsTypes,
  ProductsActions,
} from '../actions/products.actions';

// creation d'un ennumeration pour avoir l'etat de recupere les donnees comment et definit
export enum EtatProductStateEnum {
  LAODING = 'LAODING',
  LAODED = 'LAODED',
  ERROR = 'ERROR',
  INITIAL = 'INITIAL',
  NEW = 'New',
  EDIT = 'Edit',
  UPDATED = 'Updated',
}

// cette interface continet des attriutes qui peux avoir actions (etate, success, error, et donnes c'est sont recupere bien depuis service)
export interface ProductStateReducersServices {
  products: Product[];
  errorMessage: string;
  etatProductStateEnum: EtatProductStateEnum;

  // pour update
  currectProductUpdate: Product | null;
}

// car ou debut de projet quand en fait lancement il faut avoir initial car les donnes sont pas encore recupere
const initialState: ProductStateReducersServices = {
  products: [],
  errorMessage: '',
  etatProductStateEnum: EtatProductStateEnum.INITIAL,

  currectProductUpdate: null,
};

// Alors on va recupere les types d'action fait sur Action qu'on à exporter
// Alors on va creer une fonction pour reducers
// qui prend l'etat depuis EtatProductStateEnum
export function productReducers(
  state = initialState, // là il prend l'etat initial
  action: Action // Etat d'action
): ProductStateReducersServices {
  switch (action.type) {
    // get all products
    case ProdctsActionsTypes.GET_ALL_PRODCTS:
      return { ...state, etatProductStateEnum: EtatProductStateEnum.LAODING };

    case ProdctsActionsTypes.GET_ALL_PRODCTS_SUCCESS:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.LAODED,
        products: (<ProductsActions>action).payload as Product[],
      };

    case ProdctsActionsTypes.GET_ALL_PRODCTS_FAIL:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        products: [], // alors que il fait l'appel du action qu'on à sur Actiontype d'erreur et reprne msg d'erreur ainssi la liste d'erreur et vides
      };

    // selected
    case ProdctsActionsTypes.GET_SELECTED_PRODUCTS:
      return { ...state, etatProductStateEnum: EtatProductStateEnum.LAODING };

    case ProdctsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.LAODED,
        products: (<ProductsActions>action).payload as Product[],
      };

    case ProdctsActionsTypes.GET_AVALIABLE_PRODUCTS_FAIL:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        products: [], // alors que il fait l'appel du action qu'on à sur Actiontype d'erreur et reprne msg d'erreur ainssi la liste d'erreur et vides
      };

    // available
    case ProdctsActionsTypes.GET_AVALIABLE_PRODUCTS:
      return { ...state, etatProductStateEnum: EtatProductStateEnum.LAODING };

    case ProdctsActionsTypes.GET_AVALIABLE_PRODUCTS_SUCCESS:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.LAODED,
        products: (<ProductsActions>action).payload as Product[],
      };

    case ProdctsActionsTypes.GET_AVALIABLE_PRODUCTS_FAIL:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        products: [], // alors que il fait l'appel du action qu'on à sur Actiontype d'erreur et reprne msg d'erreur ainssi la liste d'erreur et vides
      };

    // Search
    case ProdctsActionsTypes.SEARCH_PRODUCTS:
      return { ...state, etatProductStateEnum: EtatProductStateEnum.LAODING };

    case ProdctsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.LAODED,
        products: (<ProductsActions>action).payload as Product[],
      };

    case ProdctsActionsTypes.SEARCH_PRODUCTS_FAIL:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        products: [],
      };

    // Save
    case ProdctsActionsTypes.SAVE_PRODUCT:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.LAODING,
      };

    case ProdctsActionsTypes.SAVE_PRODUCT_SUCCESS:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.LAODED,
        products: Array.isArray([
          ...state.products,
          (<ProductsActions>action).payload,
        ])
          ? [...state.products, (<ProductsActions>action).payload]
          : state.products, // Ajouter le produit en s'assurant que c'est un tableau
      };

    case ProdctsActionsTypes.SAVE_PRODUCT_FAIL:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        products: [], // Vider les produits en cas d'erreur
      };

    // Ajouter
    case ProdctsActionsTypes.NEW_PRODUCT:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.LAODING,
      };

    case ProdctsActionsTypes.NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.NEW,
        products: Array.isArray((<ProductsActions>action).payload)
          ? [...state.products, ...(<ProductsActions>action).payload]
          : state.products, // Ajouter un produit en s'assurant que c'est un tableau
      };

    case ProdctsActionsTypes.NEW_PRODUCT_FAIL:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        products: [], // Vider les produits en cas d'erreur
      };

    // Delete
    case ProdctsActionsTypes.DELETE_PRODUCT:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.LAODING,
      };
    case ProdctsActionsTypes.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.LAODED,
        products: state.products.filter(
          (product) => product.id !== (<ProductsActions>action).payload.id
        ),
      };
    case ProdctsActionsTypes.DELETE_PRODUCT_FAIL:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        products: [],
      };

    // Edit
    case ProdctsActionsTypes.EDIT_PRODUCT:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.LAODING,
      };
    case ProdctsActionsTypes.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.LAODED,
        currectProductUpdate: (<ProductsActions>action).payload,
      };
    case ProdctsActionsTypes.EDIT_PRODUCT_FAIL:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        products: [],
      };

    // Update
    case ProdctsActionsTypes.UPDATE_PRODUCT:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.LAODING,
      };
    case ProdctsActionsTypes.UPDATE_PRODUCT_SUCCESS:
      let updateProduct: Product = (<ProductsActions>action).payload;
      let updateProductsList = state.products.map((p) =>
        p.id == updateProduct.id ? updateProduct : p
      );
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.UPDATED,
        products: updateProductsList,
      };
    case ProdctsActionsTypes.UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        etatProductStateEnum: EtatProductStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
      };

    default:
      return { ...state };
  }
}
