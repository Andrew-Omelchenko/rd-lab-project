import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { FeaturedProductCardComponent } from './shared/featured-product-card/featured-product-card.component';
import { ProductDetailsCardComponent } from './shared/product-details-card/product-details-card.component';
import { ProductDetailsItemComponent } from './shared/product-details-item/product-details-item.component';
import { BannerCardComponent } from './shared/banner-card/banner-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    MyCartComponent,
    FeaturedProductCardComponent,
    ProductDetailsCardComponent,
    ProductDetailsItemComponent,
    BannerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
