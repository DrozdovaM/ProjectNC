import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Students } from './Students';

@Injectable({
  providedIn: 'root'
})
export class DeleteStudentService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:3000/deletestudent';

  deleteStudent(student: Students) {
    const body = student;
    return this.httpClient.post(this.url, body);
  }
}
