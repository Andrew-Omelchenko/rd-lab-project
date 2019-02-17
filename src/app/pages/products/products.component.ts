import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private products = [];
  private error = {
    ok: true
  };

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    // Fetches products data
    this.loadProductsData();
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
