import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorStudentDetailViewComponent } from './instructor-student-detail-view.component';

describe('InstructorStudentDetailViewComponent', () => {
  let component: InstructorStudentDetailViewComponent;
  let fixture: ComponentFixture<InstructorStudentDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorStudentDetailViewComponent]
    });
    fixture = TestBed.createComponent(InstructorStudentDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
