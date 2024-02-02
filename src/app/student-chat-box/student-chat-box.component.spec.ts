import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentChatBoxComponent } from './student-chat-box.component';

describe('StudentChatBoxComponent', () => {
  let component: StudentChatBoxComponent;
  let fixture: ComponentFixture<StudentChatBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentChatBoxComponent]
    });
    fixture = TestBed.createComponent(StudentChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
