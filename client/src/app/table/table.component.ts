import { Component, OnInit, Input, Output, KeyValueDiffers, KeyValueDiffer, DoCheck, IterableDiffers,
   ChangeDetectionStrategy } from '@angular/core';
import { Students } from '../forma/Students';
import { StudentService } from '../forma/student.service';
import { DeleteStudentService } from '../forma/delete-student.service';
import { AddStudentService } from '../forma/add-student.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {

  onCheckAssessment = true;

  fullName = '';
  arrFullName: string[];

  CheckDelete = false;
  Delete: boolean;

  size: string;

  data: Date;

  dataInput: string;

  OnFiltration: false;

  Gpa: string;

  id: number;

  student: Students = new Students();

  students: Students[];

  remoteStudent: Students;

  checkShadow = false;


  CheckData( years: number, month: number, day: number): Date {
    this.data = new Date(years, month, day);
    return this.data;
  }

  CheckAssessment(assessment: number): boolean {

    return assessment < 3 && this.onCheckAssessment;

  }
  toggleCheckAssessment(): boolean {

    this.onCheckAssessment = !this.onCheckAssessment;
    return this.onCheckAssessment;

  }


  _toggleCreateStudent() {

    this.studentService.checkCreatForm = !this.studentService.checkCreatForm;


  }

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

  _checkIdStudent(id: number) {
    this.studentService.checkId = id;
  }

  _editStudent(i: number) {
    this.id = i;
  }


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

  // deleteStudent(i: number): void {

  //   this.k = i;

  //   this.CheckDelete = true;
  //   if (this.Delete) {


  //     this.students.splice(this.k, 1);
  //     this.CheckDelete = false;
  //     this.Delete = undefined;
  //   }
  //   if (this.Delete === false) {

  //     this.CheckDelete = false;
  //     this.Delete = undefined;

  //   }
  // }

  sortGpa(student1: Students, student2: Students ): number {
    return student1.gpa - student2.gpa;
  }

  sortAssessment(): void {
    this.students = this.students.sort(this.sortGpa);
  }

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


  sortBirthday(student1: Students, student2: Students): number {
    const firstStudent: any = new Date(student1.birthDay);
    const secondStudent: any = new Date(student2.birthDay);

    return secondStudent - firstStudent;
  }

  sortBirh() {
    this.students = this.students.sort(this.sortBirthday);
  }

  filtrateBirthday(i: number): boolean {

    const dateInput = new Date(this.dataInput);
    const dateStudent = new Date(this.students[i].birthDay);

    if ( dateInput.getTime() < dateStudent.getTime()) {

      return true;
    }
    return false;
  }


  _checkShadow(): boolean {
    this.checkShadow = !this.checkShadow;
    return this.checkShadow;
  }

  filtrateGpa(i: number): boolean {

    if (this.students[i].gpa < (+this.Gpa)) {

      return true;
    }
    return false;

  }

  getStudents() {
    return this.addStudentService.getStudents().subscribe((data: Students[]) => {
      return this.students = data;
    });
  }


  constructor(private studentService: StudentService, private deleteStudentService: DeleteStudentService,
     private addStudentService: AddStudentService) {

  }


  ngOnInit() {
    this.getStudents() ;
  }


  // ngDoCheck() {

    // if (this.studentService.updateStudents === 0) {

    //   // this.students[this.students.length].lastName = this.studentService.student[this.studentService.student.length - 1].lastName;
    //   // this.students[this.students.length].firstName = this.studentService.student[this.studentService.student.length - 1].firstName;
    //   // this.students[this.students.length].patronymic = this.studentService.student[this.studentService.student.length - 1].patronymic;
    //   // this.students[this.students.length].birthDay = this.studentService.student[this.studentService.student.length - 1].birthDay;
    //   // this.students[this.students.length].gpa = this.studentService.student[this.studentService.student.length - 1].gpa;
    //   console.log(this.students);

    //   this.students = this.studentService.getStudents();
    //   return this.students;
    // }


    // const changes = this.iterableDiffer.diff(this.studentService.student);
    // console.log(changes);
    // if (changes) {
    //   console.log('Changes detected!');
    // }

    //   console.log('a');
    // if (this.differ.diff(this.studentService.student[this.studentService.student.length]) != null) {
    //   console.log('b');
    //   this.students = this.studentService.getStudents();
    //   console.log(this.students);

    // }
}
