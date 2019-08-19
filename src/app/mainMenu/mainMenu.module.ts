import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MainMenuComponent} from './mainMenu.component';
import {RouterModule} from '@angular/router';
import {MatCardModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ParticleEffectButtonModule} from 'angular-particle-effect-button';


@NgModule({
  // providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository],
  imports: [BrowserModule, RouterModule, BrowserAnimationsModule, MatCardModule,

  ],
  declarations: [MainMenuComponent],
  exports: [MainMenuComponent, MatCardModule],
  entryComponents: [MainMenuComponent],
  bootstrap: [MainMenuComponent]
})
export class MainMenuModule {

}

