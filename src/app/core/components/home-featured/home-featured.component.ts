import { Component, OnInit } from '@angular/core';

import {FeaturedService} from '../../services/featured.service';

@Component({
  selector: 'app-home-featured',
  templateUrl: './home-featured.component.html',
  styleUrls: ['./home-featured.component.scss']
})
export class HomeFeaturedComponent implements OnInit {
  private products = [];
  private error = {
    ok: true
  };

  constructor(private featuredService: FeaturedService) { }

  ngOnInit() {
    // Fetches products data
    this.loadProductsData();
  }

  private loadProductsData() {
    // Resets error
    this.error.ok = true;
    this.featuredService.get()
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
