import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { StudentService } from '../forma/student.service';
import {Subscription} from 'rxjs';
import { Students } from '../forma/Students';
import { InfoAboutStudentService } from '../forma/info-about-student.service';
import { AddStudentService } from '../forma/add-student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css'],
})
export class ViewStudentComponent implements OnInit {


  id: number;
  student: Students = new Students();

  // lastName = this.studentService.student[this.id - 1].lastName;
  // firstName = this.studentService.student[this.id - 1].firstName;
  // patronymic = this.studentService.student[this.id - 1].patronymic;
  // birthDay = this.studentService.student[this.id - 1].birthDay;
  // gpa = this.studentService.student[this.id - 1].gpa;

  private subscription: Subscription;

  constructor( private studentService: StudentService, private activateRoute: ActivatedRoute,
               private infoAboutStudentService: InfoAboutStudentService,
               private addStudentService: AddStudentService) {
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params['id']);

  }

  getStudents() {
    return this.addStudentService.getStudents().subscribe((data: Students[]) => {
      return this.studentService.student = data;
    });
  }

  InfoAboutStudentService(id) {
    this.infoAboutStudentService.infoAboutStudent(id).subscribe((student: Students ) => {
      this.student = student;
      console.log(this.student);
    });
  }

  ngOnInit() {
     this.InfoAboutStudentService(this.id);



  }

}
