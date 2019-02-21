import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reductionFullname'
})
export class ReductionFullnamePipe implements PipeTransform {

  transform(value: string): any {
    // Проверка на кол-во символов в слове, если 11 и больше,  то добавляется ...
    const arr = value.split('');

    if ( arr.length >= 11 ) {
      arr.splice(10, arr.length - 10);

    return arr.join('') + '\n...';
    } else {
      return arr.join('');
    }

  }

}
