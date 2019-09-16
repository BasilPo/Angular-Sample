import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodsComponent } from './goods/goods.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: GoodsComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
