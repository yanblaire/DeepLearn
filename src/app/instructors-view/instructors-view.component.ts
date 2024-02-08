import { Component, OnInit } from '@angular/core';
import { LessonPlanService } from '../lesson-plan.service';

@Component({
  selector: 'app-instructors-view',
  templateUrl: './instructors-view.component.html',
  styleUrls: ['./instructors-view.component.css']
})
export class InstructorsViewComponent implements OnInit {
  lessonPlans: any[] = [];

  constructor(private lessonPlanService: LessonPlanService) {}

  ngOnInit() {
    this.getLessonPlans();
  }

  getLessonPlans() {
    // Assuming LessonPlanService has a method to fetch lesson plans
    this.lessonPlanService.getLessonPlans().subscribe(
      (response: any) => {
        this.lessonPlans = response.lessonPlanData;
      },
      error => {
        console.error('Error fetching lesson plans:', error);
      }
    );
  }
}
