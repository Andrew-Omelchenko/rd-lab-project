import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {ProductsComponent} from './pages/products/products.component';
import {ProductComponent} from './pages/product/product.component';
import {MyCartComponent} from './pages/my-cart/my-cart.component';
import {PrivacyPolicyComponent} from './pages/static/privacy-policy/privacy-policy.component';
import {TermsAndConditionsComponent} from './pages/static/terms-and-conditions/terms-and-conditions.component';
import {UserComponent} from './pages/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'my-cart', component: MyCartComponent },
  { path: 'user', component: UserComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
