import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductsNs } from '../namespaces/products/products.ns';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = 'https://dummyjson.com';
  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductsNs.Detail[]> {
    return this.http.get<ProductsNs.All>(`${this.apiUrl}/products/`).pipe(
      map((x) => x.products)
    );
  }

  getById(id: number): Observable<ProductsNs.Detail> {
    return this.http.get<ProductsNs.Detail>(`${this.apiUrl}/products/${id}`);
  }

}
