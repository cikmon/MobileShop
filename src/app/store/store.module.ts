import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './cart/counter.directive';
import { CartSummaryComponent } from './cart/cartSummary.component';
import { CartDetailComponent } from './cart/cartDetail.component';
import { CheckoutComponent } from './cart/checkout.component';
import { RouterModule } from '@angular/router';
import {CardModule} from './card/card.module';
import {ProductDetailModule} from './productDetail/productDetail.module';
import {MainMenuModule} from '../mainMenu/mainMenu.module';



@NgModule({
  imports: [ BrowserModule, FormsModule, ModelModule, RouterModule, CardModule, MainMenuModule,
  ProductDetailModule
  ],
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CheckoutComponent, CartDetailComponent],
  exports: [StoreComponent]
})
export class StoreModule { }
