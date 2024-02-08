import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.css']
})
export class LessonDetailsComponent implements OnInit {
  lessonPlanId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the lesson plan ID from the route parameters
    this.route.params.subscribe(params => {
      this.lessonPlanId = params['lessonPlanId'];
    });
  }
}
