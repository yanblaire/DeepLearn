import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorClassDashboardComponent } from './instructor-class-dashboard.component';

describe('InstructorClassDashboardComponent', () => {
  let component: InstructorClassDashboardComponent;
  let fixture: ComponentFixture<InstructorClassDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorClassDashboardComponent]
    });
    fixture = TestBed.createComponent(InstructorClassDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
