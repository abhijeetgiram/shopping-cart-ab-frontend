import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CartService {
  private apiUrl = environment.apiUrl + '/cart';

  constructor(private http: HttpClient) {}

  getCart() {
    return this.http.get<any[]>(this.apiUrl);
  }

  addToCart(productId: number, quantity: number = 1) {
    return this.http.post(this.apiUrl, { productId, quantity });
  }

  updateCartItem(productId: number, quantity: number) {
    return this.http.put(`${this.apiUrl}/${productId}`, { quantity });
  }

  removeFromCart(productId: number) {
    return this.http.delete(`${this.apiUrl}/${productId}`);
  }
}
