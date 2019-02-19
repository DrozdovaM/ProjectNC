import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteStudentDirective } from './delete-student.directive';
import { HighlightStudentDirective } from './highlight-student.directive';
import { TransliteDirective } from './translite.directive';
import { EditSizeDirective } from './edit-size.directive';

@NgModule({
  declarations: [
    DeleteStudentDirective,
    HighlightStudentDirective,
    TransliteDirective,
    EditSizeDirective
  ],
  exports: [
    DeleteStudentDirective,
    HighlightStudentDirective,
    TransliteDirective,
    EditSizeDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
