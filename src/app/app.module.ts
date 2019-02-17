import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
import { PrivacyPolicyComponent } from './pages/static/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/static/terms-and-conditions/terms-and-conditions.component';
import { UserComponent } from './pages/user/user.component';
import {ProductsService} from './core/services/products.service';

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
    BannerCardComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
