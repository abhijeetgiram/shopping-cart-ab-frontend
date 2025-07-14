import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { CartService } from '../../services/cart/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastService } from '../../common/services/toast.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [FormsModule, CommonModule, HttpClientModule],
  standalone: true,
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';
  sortBy: string = 'name';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  get filteredProducts() {
    return [...this.products]
      .filter((p) =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .sort((a, b) =>
        this.sortBy === 'price'
          ? a.price - b.price
          : a.name.localeCompare(b.name)
      );
  }

  addToCart(product: any) {
    this.cartService.addToCart(product.id).subscribe(() => {
      this.toastService.show('Added to cart!', 'success');
    });
  }
}
