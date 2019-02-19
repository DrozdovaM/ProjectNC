import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors} from '@angular/forms';
import { Students } from '../Students';
import { StudentService } from '../student.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import { Router} from '@angular/router';
import { EditStudentService } from '../edit-student.service';
import { AddStudentService } from '../add-student.service';
import { InfoAboutStudentService } from '../info-about-student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  editStudent: Students = new Students();

  private subscription: Subscription;

  id: number;

  studentFullInfo = new FormGroup( {

    fullName: new FormGroup( {
      lastName: new FormControl(this.editStudent.lastName, [
        Validators.required, Validators.pattern('^[А-Яа-яЁё\s]+$'),  ]),
      firstName: new FormControl(this.editStudent.firstName, [
        Validators.required, Validators.pattern('^[А-Яа-яЁё\s]+$') ]),
      patronymic: new FormControl(this.editStudent.patronymic, [
        Validators.required, Validators.pattern('^[А-Яа-яЁё\s]+$') ,  ])
    }, {validators: this.checkFullName}),
    birthDay: new FormControl(this.editStudent.birthDay,  [
      Validators.required, this.birtdayValidation]),
    gpa: new FormControl(this.editStudent.gpa, [
      Validators.required, Validators.pattern('^[1-5]*[.,]?[0-9]+$') ])

  });

  toggleEditForm = true;

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

  _exit() {
    this.router.navigate(['']);
  }



  onSubmit() {

    this._editStudent(this.editStudent);
    console.log(this.studentService.id);
    // this.updateStudentForm(this.id - 1);
    this.router.navigate(['']);
  }




  constructor(private studentService: StudentService, private activateRoute: ActivatedRoute,
              private router: Router, private editStudentService: EditStudentService,
              private addStudentService: AddStudentService, private infoAboutStudentService: InfoAboutStudentService, ) {

    this.subscription = this.activateRoute.params.subscribe(params => this.id = params['id']);

   }

   editForm(id) {

    this.infoAboutStudentService.infoAboutStudent(id).subscribe((student: Students ) => {
      this.editStudent = student;
      console.log(this.editStudent);
    });

  }


  updateStudentForm(i: number) {

    this.studentService.student[i] = this.editStudent;

    return this.studentService.student;
  }


  _editStudent(student: Students) {
    this.editStudentService.editStudent(student).subscribe(() => {
      console.log(student);
      this.getStudents();
    });
  }

  getStudents() {
    return this.addStudentService.getStudents().subscribe((data: Students[]) => {
      return this.studentService.student = data;
    });
  }


  ngOnInit() {
    console.log(this.id);
    this.editForm(this.id);
  }

}
