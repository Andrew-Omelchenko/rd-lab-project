import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(values: Product[], filterString: string): Product[] {
    const pattern = (filterString || '').toLowerCase();
    if (values.length === 0 || pattern === '') {
      return values;
    }
    const results = [];
    for (const value of values) {
      if (
        value.item.toLowerCase().includes(pattern) ||
        value.category.toLowerCase().includes(pattern) ||
        value.description.toLowerCase().includes(pattern)
      ) {
        results.push(value);
      }
    }
    return results;
  }

}
