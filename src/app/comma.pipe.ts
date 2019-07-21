import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comma'
})
export class CommaPipe implements PipeTransform {

  transform(value:number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원';
  }

}
