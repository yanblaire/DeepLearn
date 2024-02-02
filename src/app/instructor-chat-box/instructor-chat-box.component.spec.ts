import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorChatBoxComponent } from './instructor-chat-box.component';

describe('InstructorChatBoxComponent', () => {
  let component: InstructorChatBoxComponent;
  let fixture: ComponentFixture<InstructorChatBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorChatBoxComponent]
    });
    fixture = TestBed.createComponent(InstructorChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
