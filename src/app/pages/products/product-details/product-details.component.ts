import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  private product = {};
  private id: number;
  private error = {
    ok: true
  };

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.loadProductData();
    this.subscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.loadProductData();
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private loadProductData() {
    // Resets error
    this.error.ok = true;
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
}
