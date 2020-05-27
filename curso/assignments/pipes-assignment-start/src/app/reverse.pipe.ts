import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    value.forEach(element => {
      element.instanceType = element.instanceType.split("").reverse().join("");
    });
    return value
  }

}
