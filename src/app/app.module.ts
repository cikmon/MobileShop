import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import {StoreModule} from './store/store.module';

import { CheckoutComponent } from './store/cart/checkout.component';
import { CartDetailComponent } from './store/cart/cartDetail.component';
import { RouterModule } from '@angular/router';
import { StoreFirstGuard } from './storeFirst.guard';
import {MainMenuComponent} from './mainMenu/mainMenu.component';
import {ParticleEffectButtonModule} from 'angular-particle-effect-button';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  SPINNER,
  POSITION,
  PB_DIRECTION,
  NgxUiLoaderHttpModule
} from 'ngx-ui-loader';



const ngxUiLoaderConfig: NgxUiLoaderConfig = {

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
  // threshold: 500,
  textPosition: 'center-center',
};



@NgModule({
  imports: [
    BrowserModule,
    // AppRoutingModule,
    StoreModule,
    ParticleEffectButtonModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
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
