import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
import {CardModule} from './card/card.module';
import {ProductDetailModule} from './productDetail/productDetail.module';
import {MainMenuModule} from '../mainMenu/mainMenu.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';


@NgModule({
  imports: [ BrowserModule, FormsModule, ModelModule, RouterModule, CardModule, MainMenuModule,
  ProductDetailModule, InfiniteScrollModule ],
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CheckoutComponent, CartDetailComponent],
  exports: [StoreComponent]
})
export class StoreModule { }
