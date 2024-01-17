import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InstructorClassDashboardComponent } from './instructor-class-dashboard/instructor-class-dashboard.component';
import { InstructorStudentDashboardComponent } from './instructor-student-dashboard/instructor-student-dashboard.component';
import { InstructorAddCompetenciesComponent } from './instructor-add-competencies/instructor-add-competencies.component';
import { InstructorStudentDetailViewComponent } from './instructor-student-detail-view/instructor-student-detail-view.component';
import { StudentViewComponent } from './student-view/student-view.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'instructor-class', component: InstructorClassDashboardComponent },
  { path: 'instructor-student', component: InstructorStudentDashboardComponent },
  { path: 'instructor-competencies', component: InstructorAddCompetenciesComponent },
  { path: 'instructor-student-detail', component: InstructorStudentDetailViewComponent },
  { path: 'student', component: StudentViewComponent },
  { path: 'home-page', component: HomePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
