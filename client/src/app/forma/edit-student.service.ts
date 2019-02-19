import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './Students';

@Injectable({
  providedIn: 'root'
})
export class EditStudentService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:3000/editstudent';

  editStudent(student: Students) {
    const body = student;
    return this.httpClient.post(this.url, body);
  }
}
