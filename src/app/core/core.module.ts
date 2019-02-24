import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SalesService} from './services/sales.service';
import {FeaturedService} from './services/featured.service';

import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';

import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeBannerComponent} from './components/home-banner/home-banner.component';
import {HomeSaleComponent} from './components/home-sale/home-sale.component';
import {HomeFeaturedComponent} from './components/home-featured/home-featured.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeBannerComponent,
    HomeSaleComponent,
    HomeFeaturedComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeBannerComponent,
    HomeSaleComponent,
    HomeFeaturedComponent
  ],
  providers: [
    SalesService,
    FeaturedService
  ]
})
export class CoreModule {}
