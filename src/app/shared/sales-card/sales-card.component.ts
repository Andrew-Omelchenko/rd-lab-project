import { Component, Input, OnInit } from '@angular/core';

import { API } from '../../core/constants/config';

@Component({
  selector: 'app-sales-card',
  templateUrl: './sales-card.component.html',
  styleUrls: ['./sales-card.component.scss']
})
export class SalesCardComponent implements OnInit {
  @Input() product: object = {};
  private imageBaseUrl = `${API.BASE_URL}${API.IMAGES}`;

  constructor() { }

  ngOnInit() {
  }

}
