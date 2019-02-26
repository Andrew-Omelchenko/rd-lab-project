import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsService } from './services/products.service';
import { ProductService } from './services/product.service';
import { FilterPipe } from './services/filter.pipe';

import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsCardComponent } from './product-details-card/product-details-card.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductsFilterComponent } from './products-filter/products-filter.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductDetailsCardComponent,
    FilterPipe,
    ProductsFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    SharedModule
  ],
  exports: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductDetailsCardComponent
  ],
  providers: [
    ProductsService,
    ProductService
  ]
})
export class ProductsModule { }
