import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import {StoreModule} from './store/store.module';

import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { RouterModule } from '@angular/router';
import { StoreFirstGuard } from './storeFirst.guard';
import {MainMenuComponent} from './mainMenu/mainMenu.component';
import {MainMenuModule} from './mainMenu/mainMenu.module';
import {CardModule} from './store/card/card.module';
import {NgxLoadingModule} from 'ngx-loading';
import {ParticleEffectButtonModule} from 'angular-particle-effect-button';
import {NgxUiLoaderConfig, NgxUiLoaderModule, NgxUiLoaderRouterModule, PB_DIRECTION, POSITION, SPINNER} from 'ngx-ui-loader';
import {ProductDetailModule} from './store/productDetail/productDetail.module';



const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#00ACC1',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'ball-spin-clockwise',
  blur: 5,
  fgsColor: '#dd0031',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'square-jelly-box',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: '#dd0031',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: '',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  threshold: 500
};
@NgModule({
  imports: [
    BrowserModule,
    // AppRoutingModule,
    StoreModule,
    ParticleEffectButtonModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxLoadingModule.forRoot({}),
    RouterModule.forRoot([
      {path: 'store', component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      { path: 'cart', component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      { path: 'checkout', component: CheckoutComponent,
        canActivate: [StoreFirstGuard]},
      {path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [StoreFirstGuard]},

      { path: 'mainmenu', component: MainMenuComponent,
        canActivate: [StoreFirstGuard]
      },
      { path: '**', redirectTo: '/store' }
    ])],
  declarations: [AppComponent],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
