import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsService} from './services/products.service';

import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from './products-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
