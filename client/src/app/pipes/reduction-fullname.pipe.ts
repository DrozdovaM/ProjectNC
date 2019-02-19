import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reductionFullname'
})
export class ReductionFullnamePipe implements PipeTransform {

  transform(value: string): any {
    const arr = value.split('');

    if ( arr.length >= 11 ) {
      arr.splice(10, arr.length - 10);

    return arr.join('') + '\n...';
    } else {
      return arr.join('');
    }

  }

}
