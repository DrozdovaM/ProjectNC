import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthdayPipe } from './birthday.pipe';
import { TranslitePipe } from './translite.pipe';
import { ReductionFullnamePipe } from './reduction-fullname.pipe';

@NgModule({
  declarations: [BirthdayPipe, TranslitePipe, ReductionFullnamePipe],
  exports: [BirthdayPipe, TranslitePipe, ReductionFullnamePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
