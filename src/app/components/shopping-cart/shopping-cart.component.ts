import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ProductService } from '../../services/product/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  imports: [FormsModule, CommonModule, HttpClientModule],
  standalone: true,
})
export class ShoppingCartComponent implements OnInit {
  cart: any[] = [];
  productsMap: any = {};

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productsMap = {};
      products.forEach((p) => (this.productsMap[p.id] = p));
      this.loadCart();
    });
  }

  loadCart() {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
    });
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService
      .updateCartItem(productId, quantity)
      .subscribe(() => this.loadCart());
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId).subscribe(() => this.loadCart());
  }

  getTotal() {
    return this.cart.reduce(
      (acc, item) =>
        acc + this.productsMap[item.productId]?.price * item.quantity,
      0
    );
  }
}
