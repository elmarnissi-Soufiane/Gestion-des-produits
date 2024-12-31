import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../models/prodcuts';

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  constructor(private http: HttpClient) {}

  // get all products
  getAllProducts(): Observable<Product[]> {
    const host = 'http://localhost:3000';
    //const host = 'http://localhost:8000/api';
    // const host = 'http://localhost:8000/api/v1';
    console.log(host);
    let data = this.http.get<Product[]>(host + '/products');
    console.log('products', data);
    return data;
  }

  // Selected
  getSelectedProducts(): Observable<Product[]> {
    const host = 'http://localhost:3000';
    //const host = 'http://localhost:8000/api';
    // const host = 'http://localhost:8000/api/v1';
    return this.http.get<Product[]>(host + '/products?selected=true');
  }

  // Available
  getAvailableProducts(): Observable<Product[]> {
    //let host = environment.host;
    const host = 'http://localhost:3000';
    //const host = 'http://localhost:8000/api';
    // const host = 'http://localhost:8000/api/v1';
    return this.http.get<Product[]>(host + '/products?available=true');
  }

  // Search
  searchProduts(keyword: string): Observable<Product[]> {
    const host = 'http://localhost:3000';
    //const host = 'http://localhost:8000/api';
    // const host = 'http://localhost:8000/api/v1/products';
    return this.http.get<Product[]>(host + '/products?name=' + keyword);
  }

  // Ajouter un product
  saveProduct(product: Product): Observable<Product> {
    const host = 'http://localhost:3000';
    //const host = 'http://localhost:8000/api';
    // const host = 'http://localhost:8000/api/v1';
    return this.http.post<Product>(host + '/products', product);
  }

  // Delete
  deleteProdcut(product: Product): Observable<void> {
    const host = 'http://localhost:3000';
    //const host = 'http://localhost:8000/api';
    //const host = 'http://localhost:8000/api/v1';
    return this.http.delete<void>(`${host}/products/${product.id}`).pipe(
      catchError((error) => {
        console.error('Error deleting product:', error);
        return throwError(() => new Error('Unable to delete product'));
      })
    );
  }

  // get ById Edit
  getProductById(id: number): Observable<Product> {
    console.log('Fetching product with ID:', id); // Ajoutez ceci pour déboguer.
    const host = 'http://localhost:3000';
    //const host = 'http://localhost:8000/api';
    // const host = 'http://localhost:8000/api/v1';
    return this.http.get<Product>(`${host}/products/${id}`);
  }

  // Update
  updateProduct(product: Product): Observable<Product> {
    console.log('Updating product:', product); // Ajoutez ceci pour déboguer.
    const host = 'http://localhost:3000';
    //const host = 'http://localhost:8000/api';
    //const host = 'http://localhost:8000/api/v1';
    return this.http.put<Product>(`${host}/products/${product.id}`, product);
  }

  // onSelect Change

  onSelectProduct(product: Product): Observable<Product> {
    console.log('Product selected service', product);

    const host = 'http://localhost:3000'; // Utilisez environment.apiUrl en production.
    const updatedProduct = { ...product, selected: !product.selected }; // Crée une copie et modifie "selected".

    return this.http
      .put<Product>(`${host}/products/${updatedProduct.id}`, updatedProduct)
      .pipe(
        catchError((error) => {
          console.error('Error updating product:', error);
          return throwError(() => new Error('Unable to update product'));
        })
      );
  }

  // OnAvaliable Change
  onAvailableProduct(product: Product): Observable<Product> {
    console.log('Available product service', product);

    const host = 'http://localhost:3000'; // Recommandé : Utilisez des fichiers d'environnement pour stocker les URL.

    // Créer une copie du produit pour éviter de modifier un objet immuable
    const updatedProduct = { ...product, available: !product.available };

    return this.http
      .put<Product>(host + '/products/' + updatedProduct.id, updatedProduct)
      .pipe(
        catchError((error) => {
          console.error('Error updating available status:', error);
          return throwError(
            () => new Error('Unable to update availability status')
          );
        })
      );
  }
}
