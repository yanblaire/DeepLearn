import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-instructor-class-dashboard',
  templateUrl: './instructor-class-dashboard.component.html',
  styleUrls: ['./instructor-class-dashboard.component.css']
})
export class InstructorClassDashboardComponent implements OnInit {
  courseName: string = '';
  lessonPlans: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // Get the course name from the route parameters
    this.route.params.subscribe(params => {
      this.courseName = params['courseName'];
      // Fetch lesson plans for the specific course
      this.fetchLessonPlans();
    });
  }

  fetchLessonPlans() {
    // Make a request to your backend to fetch lesson plans for the course
    this.http.get<any>(`/api/lesson-plans/${this.courseName}`).subscribe(
      response => {
        this.lessonPlans = response.lessonPlans;
      },
      error => {
        console.error('Error fetching lesson plans:', error);
      }
    );
  }
}
