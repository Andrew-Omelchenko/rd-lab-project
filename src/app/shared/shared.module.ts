import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturedProductCardComponent} from './featured-product-card/featured-product-card.component';


@NgModule({
  declarations: [
    FeaturedProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeaturedProductCardComponent
  ]
})
export class SharedModule {}
