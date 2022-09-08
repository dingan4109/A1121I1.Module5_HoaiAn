import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  editForm: FormGroup;
  id:number;
  product: Product = {};
  categories: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.editForm = this.fb.group({
      id: '',
      name: '',
      price: '',
      description: '',
      category: ''
    })
  }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.productService.findById(this.id).subscribe(product => {
      this.product = product;
      this.setValue();}
    );
    this.getAllCategory();
  }



  editProduct() {
    let updatedProduct = this.editForm.value;
    updatedProduct.category = {
      id: updatedProduct.category
    }
    this.productService.updateById(this.id, updatedProduct).subscribe(() => {},() => {}, () => this.router.navigate(['/product/list']));

  }
  setValue() {
    this.editForm.controls['id'].setValue(this.id);
    this.editForm.controls['name'].setValue(this.product.name);
    this.editForm.controls['price'].setValue(this.product.price);
    this.editForm.controls['description'].setValue(this.product.description);
    this.editForm.controls['category'].setValue(this.product.category.id);
  }

  getAllCategory(){
    this.categoryService.getAllCategory().subscribe(categories => this.categories = categories);
  }
}
