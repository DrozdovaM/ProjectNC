import { Directive, OnInit, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEditSize]'
})
export class EditSizeDirective implements OnInit {

  constructor() { }

  // Директива для изменения размера шрифта

  private fontSize: string;

  @Input('appEditSize') defaultSize = '20px';

  ngOnInit() {
    this.fontSize = this.defaultSize;
  }

  @HostBinding('style.fontSize') get getFontSize() {

    return this.fontSize;
  }
}
