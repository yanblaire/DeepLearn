import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorStudentDashboardComponent } from './instructor-student-dashboard.component';

describe('InstructorStudentDashboardComponent', () => {
  let component: InstructorStudentDashboardComponent;
  let fixture: ComponentFixture<InstructorStudentDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorStudentDashboardComponent]
    });
    fixture = TestBed.createComponent(InstructorStudentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
