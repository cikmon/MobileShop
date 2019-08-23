///<reference path="../../../node_modules/@types/node/index.d.ts"/>
import {Component, Input} from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
   moduleId: module.id,
  styleUrls: ['store.component.scss'],
  templateUrl: 'store.component.html',
})

export class StoreComponent {

  public productsPerPageOneTick = 16;
  public selectedCategory = null;
  public productsPerPage = this.productsPerPageOneTick;
  public selectedPageButton = 1;
  public selectedPage = 1;

  specifications = false;

  public count = 0;

  private _product: Product;

  set product(value: Product) {
    this._product = value;
    console.log(value.id);
  }

  get product(): Product {
    return this._product;
  }

  constructor(private repository: ProductRepository,
              private cart: Cart, private router: Router) {
   this._product = new Product(1, '1', '1', '1', '1');
  }

   products(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage + this.count);
}
get categories(): string[] {
  return this.repository.getCategories();
  this.specifications = false;
}
  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
   this.changePage(1);
    this.specifications = false;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
    this.selectedPageButton = newPage;
    this.count = 0;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
 /*
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x, i) => i + 1);
  }
*/
  get pageCount(): number {
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl('/cart');
  }


  onChanged(increased: any) {
    this.specifications = !this.specifications;
  }

  setProduct(product: Product) {
    this._product = product;
  }


  onScrollDown (ev) {
    this.getAddProducts ();
  }



  getAddProducts () {
    this.count += this.productsPerPageOneTick;
    this.selectedPageButton += 1;
  }
}
