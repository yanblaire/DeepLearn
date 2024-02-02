// chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrlStudent = 'http://localhost:8200/api/get-student-ai-response';
  private apiUrlInstructor = 'http://localhost:8200/api/get-instructor-ai-response';

  constructor(private http: HttpClient) {}

  getStudentAIResponse(userInput: string): Observable<{ aiResponse: string }> {
    return this.http.post<{ aiResponse: string }>(this.apiUrlStudent, { userInput });
  }

  getInstructorAIResponse(userInput: string): Observable<{ aiResponse: string }> {
    return this.http.post<{ aiResponse: string }>(this.apiUrlInstructor, { userInput });
  }
}
