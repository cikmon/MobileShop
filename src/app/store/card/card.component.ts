import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../model/product.model';
import {Cart} from '../../model/cart.model';

@Component({
  selector: 'app-card',
  moduleId: module.id,
  styleUrls: ['card.component.css'],
  templateUrl: 'card.component.html',
  // template: `<div class="bg-success p-a-1 text-xs-center">This is SportsStoreStore1</div>`

})
export class CardComponent {
  private _product: Product;

  imageObject: Array<object>;

  get product(): Product {
    return this._product;
  }

  @Input()
  set product(value: Product) {
    this._product = value;
    this.imageObject = this._product.photos;
  }

  constructor(private cart: Cart) {}


  addProductToCart(product: Product) {
    this.cart.addLine(product);

  }

  resetButton(buttonReset) {
    let  counter = 10;
    const intervalId = setInterval(() => {
      counter = counter - 1;
     // console.log(counter)
      if (counter === 0) { buttonReset.click(); }
    }, 1000);
  }

  @Output() onChanged = new EventEmitter<boolean>();
  @Output() setProduct = new EventEmitter<Product>();

  change(increased: any) {
    this.onChanged.emit(increased);
    this.setProduct.emit(this._product);
  }
}
