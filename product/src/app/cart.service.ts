import { Injectable } from '@angular/core';
import { productModel } from './models/productModel';
import { products } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //define item property to store array of current products in the cart
  
  items: productModel[] = [];
  constructor() { }
  //define method to add,return and clear card items.
  
  addToCart(product : productModel){
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
