import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsService} from '../pages/products/services/products.service';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AppRoutingModule} from '../app-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  providers: [
    ProductsService
  ]
})
export class CoreModule {}
