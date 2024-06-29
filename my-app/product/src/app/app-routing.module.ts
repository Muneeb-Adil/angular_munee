import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { products } from './product';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path : '', component : ProductListComponent},
    {path : 'products/:productId',component : ProductDetailsComponent},
    {path:'cart', component:CartComponent }
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
