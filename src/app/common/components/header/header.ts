import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark px-3">
      <a class="navbar-brand" href="#">Shopping Cart</a>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a routerLink="/" class="nav-link">Products</a>
        </li>
        <li class="nav-item">
          <a routerLink="/cart" class="nav-link">Cart</a>
        </li>
      </ul>
    </nav>
  `,
})
export class Header {}
