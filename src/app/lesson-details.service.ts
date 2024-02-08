import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LessonDetailsService {
  constructor(private http: HttpClient) {}

  getLessonDetails(lessonPlanId: string) {
    return this.http.get<any>(`/api/lesson-details/${lessonPlanId}`);
  }
}
