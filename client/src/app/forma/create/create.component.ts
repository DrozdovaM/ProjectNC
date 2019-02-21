import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors} from '@angular/forms';
import { Students } from '../Students';
import { StudentService } from '../student.service';
import { AddStudentService } from '../add-student.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {


  newStudent: Students = new Students();

  studentFullInfo = new FormGroup( {

    fullName: new FormGroup( {
      lastName: new FormControl('' , [
        Validators.required, Validators.pattern('^[А-Яа-яЁё\s]+$'),  ]),
      firstName: new FormControl('', [
        Validators.required, Validators.pattern('^[А-Яа-яЁё\s]+$') ]),
      patronymic: new FormControl('', [
        Validators.required, Validators.pattern('^[А-Яа-яЁё\s]+$') ,  ])
    }, {validators: this.checkFullName}),
    birthDay: new FormControl('',  [
      Validators.required, this.birtdayValidation]),
    gpa: new FormControl('', [
      Validators.required, Validators.pattern('^[1-5]*[.,]?[0-9]+$') ])

  });



  checkFullName(control: FormGroup): ValidationErrors | null {

    const lastName = control.get('lastName');
    const firstName = control.get('firstName');
    const patronymic = control.get('patronymic');

    if ((firstName.value === lastName.value) || (firstName.value === patronymic.value)) {
      return {firstName: true} ;
    }
    return null;
  }

  birtdayValidation(control: FormControl): {[s: string]: boolean} {
    const checkBirthday = new Date(control.value);
    const today = new Date();

    if (checkBirthday.getFullYear() > (today.getFullYear() - 10)) {
      return { birthDay: true};
    }
    return null;
  }



  constructor(private studentService: StudentService, private addStudentService: AddStudentService,
              private router: Router) {

   }



  addStudent(student: Students) {
    this.addStudentService.addStudent(student).subscribe((students: Students) => {
      this.getStudents();
      console.log(students);
    });

    this.newStudent = new Students();
  }

  getStudents() {
    return this.addStudentService.getStudents().subscribe((data: Students[]) => {
      return this.studentService.student = data;
    });
  }



  _exit() {
    this.router.navigate(['']);
  }


  onSubmit() {

    this.addStudent(this.newStudent);
    this.getStudents();
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
