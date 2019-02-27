import { Component, OnInit } from '@angular/core';

import {ProductsService} from './services/products.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private subscription: Subscription;
  private products = [];
  private firstFilter = '';
  private secondFilter = '';
  private error = {
    ok: true
  };

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    // Fetches products data
    this.loadProductsData();
  }

  private onChangeFilterData(data) {
    this.firstFilter = data.firstFilter;
    this.secondFilter = data.firstFilter;
  }

  private loadProductsData() {
    // Resets error
    this.error.ok = true;
    this.productsService.get()
      .subscribe(
        (response) => {
          console.log(response);
          this.products = response;
        },
        (error) => {
          console.log(error);
          this.error = error;
        }
      );
  }

}
