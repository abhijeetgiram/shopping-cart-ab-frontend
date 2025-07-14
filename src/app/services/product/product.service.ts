import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = environment.apiUrl + '/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProductById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
