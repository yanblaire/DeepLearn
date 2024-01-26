import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {
  messages: { text: string; isUser: boolean }[] = [];
  userInput = '';

  sendMessage() {
    // Add user message to the chat
    this.messages.push({ text: this.userInput, isUser: true });

    // Simulate AI response for now
    const aiResponse = 'This is a sample AI response.';

    // Add AI response to the chat with letter-by-letter animation
    this.addAiResponse(aiResponse);

    // Clear the user input
    this.userInput = '';
  }

  private addAiResponse(response: string) {
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
        return new Promise<void>((resolve) => setTimeout(resolve, 100)); // Adjust the delay as needed
      });
    }, Promise.resolve());
  }
}
