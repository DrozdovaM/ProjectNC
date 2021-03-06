import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDeleteStudent]'
})
export class DeleteStudentDirective {

  constructor() { }
// Директива для подтверждения удаления студента

  @Input('appDeleteStudent') message = 'Вы точно уверены?';
  @Input() function;

  @HostListener('click')
  confirm() {
    if (!window.confirm(this.message)) {
      this.function();
    }
  }

}
