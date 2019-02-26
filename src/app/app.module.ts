import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PrivacyPolicyComponent } from './pages/static/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/static/terms-and-conditions/terms-and-conditions.component';
import { PageNotFoundComponent } from './pages/static/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
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
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
