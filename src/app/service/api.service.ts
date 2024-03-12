import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct, Category } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private baseURL = 'https://fakestoreapi.com/products'

  constructor(private _httpClient: HttpClient) { }

  public getAllProduct(): Observable<IProduct[]>{ // Devuelve un observable de producto
    return this._httpClient.get<IProduct[]>(`${this.baseURL}`);
  }

  public getProducsById(id: number | string): Observable<IProduct>{ // Devuelve un observable de un producto
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`)
  }

  public getAllCategories(): Observable<Category[]>{ // Devuelve un observable de categorias
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`)
  }

  public postProduct(product: IProduct): Observable<IProduct>{ // Devuelve un observable de un producto nuevo
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }

  public updateProduct(product: IProduct, id: number | string): Observable<IProduct>{ // Devuelve un observable de un producto modificado
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product)
  }

  public deleteProduct(id: number | string): Observable<IProduct>{ // Devuelve un observable de un producto eliminado
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`)
  }
}
