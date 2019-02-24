import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MyCartComponent} from './my-cart.component';
import {MyCartRoutingModule} from './my-cart-routing.module';

@NgModule({
  declarations: [
    MyCartComponent
  ],
  imports: [
    CommonModule,
    MyCartRoutingModule
  ],
  exports: [
    MyCartComponent
  ]
})
export class MyCartModule { }
