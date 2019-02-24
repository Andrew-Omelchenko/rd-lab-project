import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerCardComponent} from './banner-card/banner-card.component';
import {FeaturedProductCardComponent} from './featured-product-card/featured-product-card.component';


@NgModule({
  declarations: [
    BannerCardComponent,
    FeaturedProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerCardComponent,
    FeaturedProductCardComponent
  ]
})
export class SharedModule {}
