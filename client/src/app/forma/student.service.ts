import { Injectable } from '@angular/core';
import { Students } from './Students';
import { AddStudentService } from './add-student.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {



  student: Students[]  ;


  id: number;
  checkId: number;

  checkEditForm = false;
  checkCreatForm = false;
  checkCreatForma = true;

  updateStudents = 0;

  getStudents(): Students[] {

    this.addStudentService.getStudents().subscribe((data: Students[]) => {
      this.student = data;
    });

    console.log(this.student);

    return this.student;
  }


  constructor(private addStudentService: AddStudentService) {
   }
}
