import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './Students';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InfoAboutStudentService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:3000/infoaboutstudent';

  infoAboutStudent(id: String): Observable<Students> {
      const body = {'id': id};
      return this.httpClient.post<Students>(this.url, body);
  }
}
