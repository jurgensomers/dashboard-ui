import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

transform(array: any[], field: string): any[] {
  if(array == undefined) return array;
    array.sort((a: any, b: any) => {

      if(field == null || field == undefined){
          if(a < b) return -1;
          if(a > b) return 1;
          return 0;
      }
      
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
