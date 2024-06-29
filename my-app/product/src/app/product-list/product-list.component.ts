import { Component, OnInit } from '@angular/core';

import {products} from "../product"
import { productModel } from '../models/productModel';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: productModel[] = [];

  constructor(private route : Router) { }

  ngOnInit(): void {
    this.products = products.map((product) => new productModel(product))
  }
  share() : void{
    window.alert("The prouct has been shared")
  }
  onNotify(){
    window.alert('You will be notified when the product goes on sale')
  }

}
