import { Component, OnInit } from '@angular/core';
import { Students } from '../forma/Students';
import { StudentService } from '../forma/student.service';
import { DeleteStudentService } from '../forma/delete-student.service';
import { AddStudentService } from '../forma/add-student.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  onCheckAssessment = true;

  fullName = '';
  arrFullName: string[];

  CheckDelete = false;
  Delete: boolean;

  dataInput: string;

  Gpa: string;

  students: Students[];

  remoteStudent: Students;

  checkShadow = false;

  // Проверка на успеваемость(студент подсвечивается красным, если оценка < 3)
  CheckAssessment(assessment: number): boolean {

    return assessment < 3 && this.onCheckAssessment;

  }
  toggleCheckAssessment(): boolean {

    this.onCheckAssessment = !this.onCheckAssessment;
    return this.onCheckAssessment;

  }

  // Поиск студента по Имени и/или Фамилии
  searchFullName(i: number): boolean {

    this.fullName = this.fullName.toLowerCase();

    this.arrFullName = this.fullName.toLowerCase().split(' ');

    this.students[i].firstName = this.students[i].firstName.toLowerCase();
    this.students[i].lastName = this.students[i].lastName.toLowerCase();

    if ((this.arrFullName[0] !== '') && (this.students[i].firstName.indexOf(this.arrFullName[0]) !== -1)) {

      return true;
    }

    if ((this.arrFullName[0] !== '') && (this.students[i].lastName.indexOf(this.arrFullName[0]) !== -1)) {

      return true;

    }

    if ((this.arrFullName[1] !== '') && (this.students[i].firstName.indexOf(this.arrFullName[1]) !== -1)) {

      return true;

    }

    if ((this.arrFullName[1] !== '') && (this.students[i].lastName.indexOf(this.arrFullName[1]) !== -1)) {

      return true;

    }

    return false;

  }


  // Удаление студента
  deleteStudent(student: Students) {
    this.remoteStudent = student;
    this.CheckDelete = true;

    if (this.Delete) {
      this.CheckDelete = false;
      this.Delete = undefined;
      return this.deleteStudentService.deleteStudent(student).subscribe(() => {
        return this.getStudents() ;
      });
    }
    if (this.Delete === false) {

      this.CheckDelete = false;
      this.Delete = undefined;

    }

  }

  // Сортировка по среднему баллу от меньшего к большему
  sortGpa(student1: Students, student2: Students ): number {
    return student1.gpa - student2.gpa;
  }

  sortAssessment(): void {
    this.students = this.students.sort(this.sortGpa);
  }

  // Сортировка ФИО по алфавиту
  sortFirstName(student1: Students, student2: Students): number {
    if (student1.firstName > student2.firstName) {
      return 1;
    }
    if (student1.firstName < student2.firstName) {
      return -1;
    }
    return 0;
  }

  sortName(): void {
    this.students = this.students.sort(this.sortFirstName);
  }

  sortLastName(student1: Students, student2: Students): number {
    if (student1.lastName > student2.lastName) {
      return 1;
    }
    if (student1.lastName < student2.lastName) {
      return -1;
    }
    return 0;
  }

  sortSurName(): void {
    this.students = this.students.sort(this.sortLastName);
  }

  sortPatronymic(student1: Students, student2: Students): number {
    if (student1.patronymic > student2.patronymic) {
      return 1;
    }
    if (student1.patronymic < student2.patronymic) {
      return -1;
    }
    return 0;
  }

  sortPatr(): void {
    this.students = this.students.sort(this.sortPatronymic);
  }


  // Сортировка по дате рождения, большего года, к меньшему
  sortBirthday(student1: Students, student2: Students): number {
    const firstStudent: any = new Date(student1.birthDay);
    const secondStudent: any = new Date(student2.birthDay);

    return secondStudent - firstStudent;
  }

  sortBirh() {
    this.students = this.students.sort(this.sortBirthday);
  }

  // Фильтрация по дате рождения (от указанной даты и раньше)
  filtrateBirthday(i: number): boolean {

    const dateInput = new Date(this.dataInput);
    const dateStudent = new Date(this.students[i].birthDay);

    if ( dateInput.getTime() < dateStudent.getTime()) {

      return true;
    }
    return false;
  }

  // Фильрация по среднему баллу ( от указанного и больше)
  filtrateGpa(i: number): boolean {

    if (this.students[i].gpa < (+this.Gpa)) {

      return true;
    }
    return false;

  }

// Появление затемнения при popup
  _checkShadow(): boolean {
    this.checkShadow = !this.checkShadow;
    return this.checkShadow;
  }

  getStudents() {
    return this.addStudentService.getStudents().subscribe((data: Students[]) => {
      return this.students = data;
    });
  }


  constructor(private studentService: StudentService, private deleteStudentService: DeleteStudentService,
     private addStudentService: AddStudentService) {
      this.getStudents() ;
  }

  ngOnInit() {
    this.getStudents() ;
  }

}
