import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailsCardComponent } from './pages/product/product-details-card/product-details-card.component';
import { PrivacyPolicyComponent } from './pages/static/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/static/terms-and-conditions/terms-and-conditions.component';
import { PageNotFoundComponent } from './pages/static/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailsCardComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
