import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product-service.service'

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
 
  productService = inject(ProductService);
  products: Product[] = [];
  filteredProducts: Product[] | undefined;
  
  constructor() {
    this.productService.getAllProducts().then((products: Product[]) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredProducts = this.products;
      return;
    }
    this.filteredProducts = this.products.filter((product) =>
      product?.title.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
