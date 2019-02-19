import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translite'
})
export class TranslitePipe implements PipeTransform {

  transform(value: string): string {

    const arr = value.split('');

    for (let i = 0; i <= arr.length; i++ ) {
      switch (arr[i]) {
        case 'а':
        arr[i] = 'a';
        break;
        case 'б':
        arr[i] = 'b';
        break;
        case 'в':
        arr[i] = 'v';
        break;
        case 'г':
        arr[i] = 'g';
        break;
        case 'д':
        arr[i] = 'd';
        break;
        case 'е':
        arr[i] = 'e';
        break;
        case 'ё':
        arr[i] = 'e';
        break;
        case 'ж':
        arr[i] = 'zh';
        break;
        case 'з':
        arr[i] = 'z';
        break;
        case 'и':
        arr[i] = 'i';
        break;
        case 'й':
        arr[i] = 'i';
        break;
        case 'к':
        arr[i] = 'k';
        break;
        case 'л':
        arr[i] = 'l';
        break;
        case 'м':
        arr[i] = 'm';
        break;
        case 'н':
        arr[i] = 'n';
        break;
        case '0':
        arr[i] = 'o';
        break;
        case 'п':
        arr[i] = 'p';
        break;
        case 'р':
        arr[i] = 'r';
        break;
        case 'с':
        arr[i] = 's';
        break;
        case 'т':
        arr[i] = 't';
        break;
        case 'у':
        arr[i] = 'u';
        break;
        case 'ф':
        arr[i] = 'f';
        break;
        case 'х':
        arr[i] = 'kh';
        break;
        case 'ц':
        arr[i] = 'ts';
        break;
        case 'ч':
        arr[i] = 'ch';
        break;
        case 'ш':
        arr[i] = 'sh';
        break;
        case 'щ':
        arr[i] = 'shch';
        break;
        case 'ы':
        arr[i] = 'y';
        break;
        case 'ь':
        arr[i] = '';
        break;
        case 'ъ':
        arr[i] = 'ie';
        break;
        case 'э':
        arr[i] = 'e';
        break;
        case 'ю':
        arr[i] = 'iu';
        break;
        case 'я':
        arr[i] = 'ia';
        break;
      }
    }

    return arr.join('');
  }
}
