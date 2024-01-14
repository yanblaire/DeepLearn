import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent {
  // Replace [Instructor Name] with the actual instructor's name
  instructorName = '[Instructor Name]';
  classList: string[] = []; // Array to store the list of classes
  newClassName: string = ''; // Variable to store the new class name

  // createClass(newClassName: string) {
  //   this.classList.push(newClassName);
  // }
  createClass() {
    if (this.newClassName.trim() !== '') {
      this.classList.push(this.newClassName);
      this.newClassName = ''; // Clear the input field after adding a class
    }
  }

  constructor(private router: Router) {}

  // Method to redirect to the Class Dashboard
  redirectToClassDashboard(className: string) {
    // Navigate to the instructor-class-dashboard route with the selected class name
    this.router.navigate(['/instructor-class', className]);
  }

   // Method to add a new class to the classList
   addClass() {
    if (this.newClassName.trim() !== '') {
      this.classList.push(this.newClassName);
      this.newClassName = ''; // Clear the input field after adding the class
    }
  }
}
