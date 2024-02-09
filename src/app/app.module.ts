import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructorClassDashboardComponent } from './instructor-class-dashboard/instructor-class-dashboard.component';
import { InstructorStudentDashboardComponent } from './instructor-student-dashboard/instructor-student-dashboard.component';
import { InstructorStudentDetailViewComponent } from './instructor-student-detail-view/instructor-student-detail-view.component';
import { InstructorAddCompetenciesComponent } from './instructor-add-competencies/instructor-add-competencies.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InstructorsViewComponent } from './instructors-view/instructors-view.component';
import { CourseComponent } from './course/course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { HeaderComponent } from './header/header.component';
import { StudentChatBoxComponent } from './student-chat-box/student-chat-box.component';
import { StudentViewComponent } from '../app/student-view/student-view.component';
import { HttpClientModule } from '@angular/common/http';
import { InstructorChatBoxComponent } from './instructor-chat-box/instructor-chat-box.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructorClassDashboardComponent,
    InstructorStudentDashboardComponent,
    InstructorStudentDetailViewComponent,
    InstructorAddCompetenciesComponent,
    StudentViewComponent,
    HomePageComponent,
    InstructorsViewComponent,
    CourseComponent,
    SideBarComponent,
    ProfileMenuComponent,
    HeaderComponent,
    StudentChatBoxComponent,
    InstructorChatBoxComponent,
    LessonComponent,
    LessonDetailsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
