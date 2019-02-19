import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Students } from './Students';

@Injectable({
  providedIn: 'root'
})
export class AddStudentService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:3000/addstudent';
  getUrl = 'http://localhost:3000/lookall';

  addStudent(student: Students): Observable<Students> {
    const body = student;
    return this.httpClient.post<Students>(this.url, body);
  }

  getStudents(): Observable<Students[]> {
    return this.httpClient.get<Students[]>(this.getUrl);
  }
}
