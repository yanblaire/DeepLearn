// chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import * as dotenv from 'dotenv';
import { environment } from '../environments/environment';


// Load environment variables from .env file
// dotenv.config();

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrlStudent = 'https://deeplearn-server.azurewebsites.net/api/get-student-ai-response';
  private apiUrlInstructor = 'https://deeplearn-server.azurewebsites.net/api/get-instructor-ai-response';

// Use the OpenAI API key from the environment variable
private apiKey = environment.openaiApiKey || 'default-api-key-for-local-development';

constructor(private http: HttpClient) {}

getStudentAIResponse(userInput: string): Observable<{ aiResponse: string }> {
  return this.http.post<{ aiResponse: string }>(this.apiUrlStudent, { userInput }, {
    headers: {
      Authorization: `Bearer ${this.apiKey}`,
    },
  });
}

getInstructorAIResponse(userInput: string): Observable<{ aiResponse: string }> {
  return this.http.post<{ aiResponse: string }>(this.apiUrlInstructor, { userInput }, {
    headers: {
      Authorization: `Bearer ${this.apiKey}`,
    },
  });
}
}
