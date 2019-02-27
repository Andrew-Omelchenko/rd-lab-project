import {Component, Input, OnInit } from '@angular/core';

import { API } from '../../core/constants/config';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-featured-product-card',
  templateUrl: './featured-product-card.component.html',
  styleUrls: ['./featured-product-card.component.scss']
})
export class FeaturedProductCardComponent implements OnInit {
  @Input() product: object = {};
  private imageBaseUrl = `${API.BASE_URL}${API.IMAGES}`;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // console.log(this.product);
  }

  private onAddToCart(event) {
    this.cartService.add(event);
  }
}
