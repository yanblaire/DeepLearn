import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructorClassDashboardComponent } from './instructor-class-dashboard/instructor-class-dashboard.component';
import { InstructorStudentDashboardComponent } from './instructor-student-dashboard/instructor-student-dashboard.component';
import { InstructorStudentDetailViewComponent } from './instructor-student-detail-view/instructor-student-detail-view.component';

import { InstructorAddCompetenciesComponent } from './instructor-add-competencies/instructor-add-competencies.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './StudentView/nav-bar/nav-bar.component';
import { SideBarComponent } from './StudentView/side-bar/side-bar.component';
import { HomeComponent } from './StudentView/home/home.component';
import { DashboardComponent } from './StudentView/dashboard/dashboard.component';
import { MyCoursesComponent } from './StudentView/my-courses/my-courses.component';
import { SettingsComponent } from './StudentView/settings/settings.component';
import { ProfileComponent } from './StudentView/profile/profile.component';
import { CourseComponent } from './StudentView/course/course.component';
import { InstructorsViewComponent } from './InstructorsView/instructors-view/instructors-view.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructorClassDashboardComponent,
    InstructorStudentDashboardComponent,
    InstructorStudentDetailViewComponent,
    InstructorAddCompetenciesComponent,
    HomePageComponent,
    NavBarComponent,
    SideBarComponent,
    HomeComponent,
    DashboardComponent,
    MyCoursesComponent,
    SettingsComponent,
    ProfileComponent,
    CourseComponent,
    InstructorsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
