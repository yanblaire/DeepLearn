// chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'http://localhost:8200/api/get-ai-response'; // Update this if your endpoint is different

  constructor(private http: HttpClient) {}

  getAIResponse(userInput: string): Observable<{ aiResponse: string }> {
  console.log({ userInput })
    return this.http.post<{ aiResponse: string }>(this.apiUrl, { userInput });
  }
}
