import { TestBed } from '@angular/core/testing';

import { LessonDetailsService } from './lesson-details.service';

describe('LessonDetailsService', () => {
  let service: LessonDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
