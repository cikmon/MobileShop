import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ParticleEffectButtonModule} from 'angular-particle-effect-button';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ProductDetailComponent} from './productDetail.component';
import {ModelModule} from '../../model/model.module';
import {MatCardModule, MatInputModule} from '@angular/material';
import {ProductDetailSpecificationsComponent} from './productDetailSpecifications.component';
import { ProductDetailCommentsComponent } from './product-detail-comments/product-detail-comments.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [BrowserModule, RouterModule, BrowserAnimationsModule, MatCardModule,
    ModelModule, ParticleEffectButtonModule, MatInputModule, FormsModule,
    ReactiveFormsModule
    ],
  declarations: [ProductDetailComponent, ProductDetailSpecificationsComponent, ProductDetailCommentsComponent],
  exports: [ProductDetailComponent],
  entryComponents: [ProductDetailComponent],
  bootstrap: [ProductDetailComponent]
})
export class ProductDetailModule {

}
