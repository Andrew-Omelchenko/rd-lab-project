import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Product } from '../services/product.model';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrls: ['./product-details-card.component.scss']
})
export class ProductDetailsCardComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  product: Product;
  id: number;
  private error = {
    ok: true
  };

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // Resets error
    this.error.ok = true;
    this.subscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.productService.get(this.id)
            .subscribe(
              (response) => {
                console.log(response);
                this.product = response;
              },
              (error) => {
                console.log(error);
                this.error = error;
              }
            );
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
