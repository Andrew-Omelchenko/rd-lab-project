import { Component, OnInit } from '@angular/core';

import {SalesService} from '../../services/sales.service';

@Component({
  selector: 'app-home-sale',
  templateUrl: './home-sale.component.html',
  styleUrls: ['./home-sale.component.scss']
})
export class HomeSaleComponent implements OnInit {
  private products = [];
  private error = {
    ok: true
  };

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    // Fetches products data
    this.loadProductsData();
  }

  private loadProductsData() {
    // Resets error
    this.error.ok = true;
    this.salesService.get()
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
