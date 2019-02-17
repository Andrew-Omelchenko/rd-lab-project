import {Component, Input, OnInit} from '@angular/core';

import { API } from '../../core/constants/config';

@Component({
  selector: 'app-featured-product-card',
  templateUrl: './featured-product-card.component.html',
  styleUrls: ['./featured-product-card.component.scss']
})
export class FeaturedProductCardComponent implements OnInit {
  @Input() product: object = {};
  private imageBaseUrl = `${API.BASE_URL}${API.IMAGES}`;

  constructor() { }

  ngOnInit() {
    console.log(this.product);
  }

}
