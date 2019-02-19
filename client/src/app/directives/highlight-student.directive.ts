import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightStudent]'
})
export class HighlightStudentDirective {

  constructor() { }

  private color = 'black';
  private fontWeight = 'normal';

  @HostBinding('style.color') get getColor() {
    return this.color;
  }

  @HostBinding('style.fontWeight') get getFontWeight() {
    return this.fontWeight;
  }

  @HostListener('mouseenter') mouseEnter() {

    this.color = 'rgb(35, 30, 61)';
    this.fontWeight = 'bold';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.color = 'black';
    this.fontWeight = 'normal';
  }

}
