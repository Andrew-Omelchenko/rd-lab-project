import { Component, OnInit } from '@angular/core';

import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  orders = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.orders = this.cartService.getOrders();
  }

}
