import { Directive, OnInit, HostListener,  Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEditSize]'
})
export class EditSizeDirective implements OnInit {

  constructor() { }

  private fontSize: string;
  // clicks = 0;

  @Input('appEditSize') editSize = '20px';
  @Input() defaultSize = '16px';


  ngOnInit() {
    this.fontSize = this.defaultSize;
  }

  @HostBinding('style.fontSize') get getFontSize() {

    return this.fontSize;
  }

  // @HostListener('click', ['$event.target'])
  // onclick(clicks) {
  //   if ( this.clicks === 0 ) {
  //     this.fontSize = this.editSize;
  //     return clicks = 1;
  //   }
  //   if (this.fontSize === this.editSize) {
  //     this.fontSize = this.defaultSize;
  //     return clicks = 0;
  //   }
  // }


}
