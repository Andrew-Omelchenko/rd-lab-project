import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { PrivacyPolicyComponent } from './pages/static/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/static/terms-and-conditions/terms-and-conditions.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', loadChildren: './pages/products/products.module#ProductsModule' },
  { path: 'product/:id', component: ProductComponent },
  { path: 'my-cart', component: MyCartComponent },
  { path: 'user', component: UserComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
