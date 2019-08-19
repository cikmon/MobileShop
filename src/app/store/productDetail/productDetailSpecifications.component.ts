import {Component, EventEmitter, Output, Input, ViewEncapsulation} from '@angular/core';
import {Product} from '../../model/product.model';


@Component({
  selector: 'app-product-detail-specifications',
  moduleId: module.id,
  styleUrls: ['productDetailSpecifications.component.css'],
  templateUrl: 'productDetailSpecifications.component.html'
  // encapsulation: ViewEncapsulation.None
  // template: `<div class="bg-success p-a-1 text-xs-center">This is SportsStoreStore1</div>`

})
export class ProductDetailSpecificationsComponent {
  constructor() {}

  @Input()
  public product: Product;

  @Output() onChanged = new EventEmitter<boolean>();
  change(increased:any) {
    this.onChanged.emit(increased);}
}
