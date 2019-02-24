import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsService} from './services/products.service';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AppRoutingModule} from '../app-routing.module';

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
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  providers: [
    ProductsService
  ]
})
export class CoreModule {}
