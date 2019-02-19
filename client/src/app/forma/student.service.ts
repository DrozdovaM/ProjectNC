import { Injectable } from '@angular/core';
import { Students } from './Students';
import { AddStudentService } from './add-student.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {



  student: Students[]  ;
  //   { id: 1, lastName: 'дроздова', firstName: 'мария', patronymic: 'максимовна',
  //   birthDay: '1995-03-17' , gpa: 2.88},
  //   { id: 2, lastName: 'кудряшов', firstName: 'илья', patronymic: 'васильевич',
  //   birthDay: '1996-07-15', gpa: 4.8},
  //   { id: 3, lastName: 'юдин', firstName: 'павел', patronymic: 'викторович',
  //   birthDay: '1998-06-22', gpa: 5.0},
  //   { id: 4, lastName: 'широков', firstName: 'илья', patronymic: 'сергеевич',
  //   birthDay: '1999-02-18', gpa: 4.5},
  //   { id: 5, lastName: 'нагинайло', firstName: 'дмитрий', patronymic: 'александрович',
  //   birthDay: '1997-11-30', gpa: 3.0},
  //   { id: 6, lastName: 'полякова', firstName: 'ирина', patronymic: 'олеговна',
  //   birthDay: '2000-06-10', gpa: 3.5}
  // ];


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


  checkUpdateStudents() {
    this.updateStudents = 1;
    return this.updateStudents;
  }

  // addStudent(students: Students) {

  //   this.student.push(students);

  // }


  // toggleCreateStudent(): boolean {

  //   this.createStudentButton = !this.createStudentButton;
  //   return this.createStudentButton;
  // }

  constructor(private addStudentService: AddStudentService) {
   }
}
