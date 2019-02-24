import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from '../app-routing.module';
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
    AppRoutingModule
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeBannerComponent,
    HomeSaleComponent,
    HomeFeaturedComponent
  ]
})
export class CoreModule {}
