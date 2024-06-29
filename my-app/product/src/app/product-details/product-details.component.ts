import { Component, OnInit } from '@angular/core';
import { productModel } from '../models/productModel';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../product';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product : productModel | undefined;
  constructor(private route : ActivatedRoute, private router: Router,private cartService: CartService) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIddFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product=>product.id === productIddFromRoute);
  }

  goToProductPage(): void{
    this.router.navigate(['/'])
  }

  addToCart(product  : productModel){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');

  }

}
