import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private apiUrl = 'http://localhost:8200/api/get-lesson-plan-data';

  constructor(private http: HttpClient) {}

  getAllLessons(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getLessonById(lessonId: string): Observable<any> {
    const url = `${this.apiUrl}/api/get-lesson-by-id/${lessonId}`;
    return this.http.get<any>(url);
  }
}