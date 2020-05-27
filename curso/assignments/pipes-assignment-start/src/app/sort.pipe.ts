import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ): any {
    return value.sort((obj1, obj2) => {
      if (obj1.name > obj2.name) {
        return 1;
      }

      if (obj1.name < obj2.name) {
        return -1;
      }

      return 0;
    });
  }

}
