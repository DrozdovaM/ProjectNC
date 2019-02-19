import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { StudentService } from './student.service';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddStudentService } from './add-student.service';
import { DeleteStudentService } from './delete-student.service';
import { EditStudentService } from './edit-student.service';


@NgModule({
  declarations: [CreateComponent, EditComponent ],
  exports: [CreateComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [StudentService, AddStudentService, DeleteStudentService, EditStudentService]
})
export class FormaModule { }
