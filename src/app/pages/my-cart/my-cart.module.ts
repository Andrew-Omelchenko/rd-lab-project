import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MyCartRoutingModule} from './my-cart-routing.module';
import {MyCartComponent} from './my-cart.component';
import { ProductDetailsItemComponent } from './product-details-item/product-details-item.component';

@NgModule({
  declarations: [
    MyCartComponent,
    ProductDetailsItemComponent
  ],
  imports: [
    CommonModule,
    MyCartRoutingModule
  ],
  exports: [
    MyCartComponent,
    ProductDetailsItemComponent
  ]
})
export class MyCartModule { }
