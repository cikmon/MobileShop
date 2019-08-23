import { Component } from '@angular/core';
import {Cart} from '../../model/cart.model';

@Component({
  moduleId: module.id,
  styleUrls: ['cartDetail.component.css'],
  templateUrl: 'cartDetail.component.html'
})
export class CartDetailComponent {
  constructor(public cart: Cart) { }
}
