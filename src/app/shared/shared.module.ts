import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FeaturedProductCardComponent } from './featured-product-card/featured-product-card.component';
import { SalesCardComponent } from './sales-card/sales-card.component';

@NgModule({
  declarations: [
    FeaturedProductCardComponent,
    SalesCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FeaturedProductCardComponent,
    SalesCardComponent
  ]
})
export class SharedModule {}
