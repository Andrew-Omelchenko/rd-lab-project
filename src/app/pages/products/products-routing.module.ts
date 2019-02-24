import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import {ProductDetailsCardComponent} from './product-details-card/product-details-card.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, children: [
      { path: ':id', component: ProductDetailsCardComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }
