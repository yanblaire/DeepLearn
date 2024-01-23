import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InstructorClassDashboardComponent } from './instructor-class-dashboard/instructor-class-dashboard.component';
import { InstructorStudentDashboardComponent } from './instructor-student-dashboard/instructor-student-dashboard.component';
import { InstructorAddCompetenciesComponent } from './instructor-add-competencies/instructor-add-competencies.component';
import { InstructorStudentDetailViewComponent } from './instructor-student-detail-view/instructor-student-detail-view.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { HomeComponent } from './StudentView/home/home.component';
import { DashboardComponent } from './StudentView/dashboard/dashboard.component';
import { MyCoursesComponent } from './StudentView/my-courses/my-courses.component';
import { SettingsComponent } from './StudentView/settings/settings.component';
import { ProfileComponent } from './StudentView/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'instructor-class', component: InstructorClassDashboardComponent },
  { path: 'instructor-student', component: InstructorStudentDashboardComponent },
  { path: 'instructor-competencies', component: InstructorAddCompetenciesComponent },
  { path: 'instructor-student-detail', component: InstructorStudentDetailViewComponent },
  { path: 'student', component: StudentViewComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'myCourses', component: MyCoursesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
