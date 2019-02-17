import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-featured-product-card',
  templateUrl: './featured-product-card.component.html',
  styleUrls: ['./featured-product-card.component.scss']
})
export class FeaturedProductCardComponent implements OnInit {
  @Input() product: object = {};

  constructor() { }

  ngOnInit() {
    console.log(this.product);
  }

}
