import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent {
  lessons: any[] = [];

  constructor(private lessonService: LessonService) {}

  ngOnInit(): void {
    this.lessonService.getAllLessons().subscribe((data: any) => {
      this.lessons = data.lessonPlanData;
    });
  }
}
