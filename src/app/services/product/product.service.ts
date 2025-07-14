import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProductById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
