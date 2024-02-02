// student-chat-box.component.ts
import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-student-chat-box',
  templateUrl: './student-chat-box.component.html',
  styleUrls: ['./student-chat-box.component.css']
})
export class StudentChatBoxComponent {
  messages: { text: string; isUser: boolean }[] = [];
  userInput = '';
  isWaitingForAi = false;

  constructor(private chatService: ChatService) {}

  sendMessage() {
    // Add user message to the chat
    this.messages.push({ text: this.userInput, isUser: true });

    // Set the flag to indicate that we're waiting for the AI response
    this.isWaitingForAi = true;

    // Call the chat service to get AI response for students
    this.chatService.getStudentAIResponse(this.userInput).subscribe(
      (response) => {
        console.log(response);
        // Add AI response to the chat with letter-by-letter animation
        this.addAiResponse(response.aiResponse);

        // Reset the flag after receiving the response
        this.isWaitingForAi = false;
      },
      (error) => {
        console.error('Error fetching AI response:', error);
        // Reset the flag in case of an error
        this.isWaitingForAi = false;
      }
    );

    // Clear the user input
    this.userInput = '';
  }

  private addAiResponse(response: string) {
    // Replace new lines with <br> tags
    response = response.replace(/\n/g, '<br>');
    // Split the response into individual letters
    const letters = response.split('');

    // Create a promise for each letter to ensure sequential execution
    letters.reduce((promise, letter) => {
      return promise.then(() => {
        // Concatenate letters to form the current part of the response
        const currentResponse = (this.messages.length > 0 ? this.messages[this.messages.length - 1].text : '') + letter;
        // Update the last message or add a new one
        if (this.messages.length > 0 && this.messages[this.messages.length - 1].isUser) {
          // If the last message is from the user, add a new AI message
          this.messages.push({ text: letter, isUser: false });
        } else {
          // If the last message is from AI, update the existing AI message
          this.messages[this.messages.length - 1].text = currentResponse;
        }
        // Return a promise with a delay
        return new Promise<void>((resolve) => setTimeout(resolve, 10)); // Adjust the delay as needed
      });
    }, Promise.resolve());
  }
}
