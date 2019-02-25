import {Component, Input, OnInit} from '@angular/core';

import { API } from '../../../core/constants/config';

@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrls: ['./product-details-card.component.scss']
})
export class ProductDetailsCardComponent implements OnInit {
  @Input() product: object = {};
  private imageBaseUrl = `${API.BASE_URL}${API.IMAGES}`;

  constructor() { }

  ngOnInit() {
  }
}
