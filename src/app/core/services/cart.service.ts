import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  orders = [];

  constructor() { }

  getOrders() {
    return this.orders;
  }

  add(product) {
    this.orders.push(product);
  }
}
