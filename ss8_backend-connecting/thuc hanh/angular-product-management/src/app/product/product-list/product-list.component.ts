import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  deleteProduct: Product = {};
  config: any;

  constructor(private productService : ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.products.length
    };
  }

  private getAll() {
    this.productService.getAll().subscribe(products => this.products = products);
  }

  delModal(product: Product) {
    this.deleteProduct = product;
  }

  delProduct() {
    this.productService.deleteProduct(this.deleteProduct.id).subscribe(() => this.getAll());
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }
}
