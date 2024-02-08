// lesson-plan.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonPlanService {
  private apiUrl = 'http://localhost:8200/api';  // Update with your server URL

  constructor(private http: HttpClient) {}

  getLessonPlans(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-lesson-plan-data`);
  }
}
