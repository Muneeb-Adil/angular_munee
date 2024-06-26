import { Component, OnInit , Input ,  Output, EventEmitter} from '@angular/core';
import { productModel } from '../models/productModel';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: productModel | undefined;
  @Output() notify = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
