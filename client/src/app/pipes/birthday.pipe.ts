import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthday'
})
export class BirthdayPipe implements PipeTransform {

  transform(value: Date, args?: any): number {

    const today: any = new Date();
    const birthDay: any = new Date(value);
    const diff = today - birthDay;
    const age = Math.floor(diff / 31557600000);
    return age;
  }

}

