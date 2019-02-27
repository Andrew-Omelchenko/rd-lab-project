import {Component, Input, OnInit} from '@angular/core';

import { API } from '../../../core/constants/config';

@Component({
  selector: 'app-product-details-item',
  templateUrl: './product-details-item.component.html',
  styleUrls: ['./product-details-item.component.scss']
})
export class ProductDetailsItemComponent implements OnInit {
  @Input() order: object = {};
  private imageBaseUrl = `${API.BASE_URL}${API.IMAGES}`;

  constructor() { }

  ngOnInit() {
  }

}
