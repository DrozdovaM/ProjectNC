import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { StudentService } from '../forma/student.service';
import {Subscription} from 'rxjs';
import { Students } from '../forma/Students';
import { InfoAboutStudentService } from '../forma/info-about-student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css'],
})
export class ViewStudentComponent implements OnInit {


  // Информация о студенте, по id

  id: number;
  student: Students = new Students();

  private subscription: Subscription;

  constructor( private studentService: StudentService, private activateRoute: ActivatedRoute,
               private infoAboutStudentService: InfoAboutStudentService) {
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params['id']);

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
