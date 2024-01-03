import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAddCompetenciesComponent } from './instructor-add-competencies.component';

describe('InstructorAddCompetenciesComponent', () => {
  let component: InstructorAddCompetenciesComponent;
  let fixture: ComponentFixture<InstructorAddCompetenciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorAddCompetenciesComponent]
    });
    fixture = TestBed.createComponent(InstructorAddCompetenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
