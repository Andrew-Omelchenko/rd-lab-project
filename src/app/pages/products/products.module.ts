import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products.service';
import { ProductService } from './services/product.service';

import { ProductsComponent } from './products.component';
import { ProductDetailsCardComponent } from './product-details-card/product-details-card.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  exports: [
    ProductsComponent,
    ProductDetailsCardComponent
  ],
  providers: [
    ProductsService,
    ProductService
  ]
})
export class ProductsModule { }
