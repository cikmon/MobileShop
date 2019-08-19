import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CardComponent} from './card.component';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModelModule} from '../../model/model.module';
import {ISliderComponent} from './cardSlider/islider/islider.component';
import {ParticleEffectButtonModule} from 'angular-particle-effect-button';




@NgModule({
  // providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository],
  imports: [BrowserModule, RouterModule, BrowserAnimationsModule, MatCardModule, ModelModule,
    ParticleEffectButtonModule],
  declarations: [CardComponent, ISliderComponent],
  exports: [CardComponent],
  entryComponents: [CardComponent],
  bootstrap: [CardComponent]
})
export class CardModule {

}

