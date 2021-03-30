import { NgModule } from '@angular/core';
import { CartdetailsComponent } from './components/cartdetails/cartdetails.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartdetailsComponent },
  { path: 'shop', component: ShoppingCartComponent },
  { path: 'myorder', component: MyorderComponent },
  { path: 'checkout', component: CheckoutComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
