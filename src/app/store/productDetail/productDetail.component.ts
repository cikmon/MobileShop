import {Component, EventEmitter, Output, Input, ViewEncapsulation} from '@angular/core';
import {Product} from '../../model/product.model';


@Component({
  selector: 'app-product-detail',
  moduleId: module.id,
  styleUrls: ['productDetail.component.css'],
  templateUrl: 'productDetail.component.html'
  // encapsulation: ViewEncapsulation.None
  // template: `<div class="bg-success p-a-1 text-xs-center">This is SportsStoreStore1</div>`

})
export class ProductDetailComponent {
  showComponent: number = 1;
  showAddComment = false;

  constructor() {}

  @Output() onChanged = new EventEmitter<boolean>();


  private _product: Product;

  get product(): Product {
    return this._product;
  }

  @Input()
  set product(value: Product) {
    this._product = value;
  }

  change() {
    this.onChanged.emit(); }

    showSpecifications() {
    this.showComponent = 1;
    }
    showComments() {
      this.showComponent = 2;
    }

  getCountComments() {
      return this.product.comments.length;
  }

  showAddCommentMethod(show: boolean) {

    this.showAddComment = show;
  }
}
