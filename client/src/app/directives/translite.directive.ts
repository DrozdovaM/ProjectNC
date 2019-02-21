import { Directive, ElementRef, HostListener, Renderer2, OnInit, } from '@angular/core';

@Directive({
  selector: '[appTranslite]'
})
export class TransliteDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // При наведении курсора, элемент становится непрозрачным


  @HostListener('mouseleave') onMouseLeave() {

    this.setDisplay('0');

  }

  @HostListener('mouseenter') onMouseEnter() {

    this.setDisplay('1');
  }

  private setDisplay(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'opacity', val);
}
  ngOnInit() {

    this.renderer.setStyle(this.element.nativeElement, 'opacity', '0');
  }
}
