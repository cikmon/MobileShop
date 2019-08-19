import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';

@NgModule({
  // providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository],
  imports: [HttpModule],
  providers: [ProductRepository, Cart, Order, OrderRepository,
    RestDataSource, AuthService]
})
export class ModelModule { }
