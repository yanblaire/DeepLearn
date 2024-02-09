import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.css']
})
export class LessonDetailsComponent implements OnInit {
  lessonId!: string;
  lesson: any; // Adjust the type based on your lesson structure

  constructor(private route: ActivatedRoute, private lessonService: LessonService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.lessonId = params['id'];
      this.fetchLessonDetails();
    });
  }

  fetchLessonDetails(): void {
    this.lessonService.getLessonById(this.lessonId).subscribe((data: any) => {
      this.lesson = data.lessonData;
    });
  }
}