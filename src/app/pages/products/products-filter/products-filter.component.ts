import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {
  @Output() submit: EventEmitter<object> = new EventEmitter();
  public productsFilter: FormGroup;
  private filterValues: {firstFilter: string, secondFilter: string} = {
    firstFilter: '',
    secondFilter: ''
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productsFilter = this.formBuilder.group({
      firstFilter: [''],
      secondFilter: ['']
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.filterValues.firstFilter = this.productsFilter.get('firstFilter').value;
    this.filterValues.secondFilter = this.productsFilter.get('secondFilter').value;
    this.submit.emit(this.filterValues);
  }

}
