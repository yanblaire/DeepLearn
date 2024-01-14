import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructorClassDashboardComponent } from './instructor-class-dashboard/instructor-class-dashboard.component';
import { InstructorStudentDashboardComponent } from './instructor-student-dashboard/instructor-student-dashboard.component';
import { InstructorStudentDetailViewComponent } from './instructor-student-detail-view/instructor-student-detail-view.component';

import { InstructorAddCompetenciesComponent } from './instructor-add-competencies/instructor-add-competencies.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { OfferComponent } from './offer/offer.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { FooterComponent } from './footer/footer.component';
import { InstructorComponent } from './instructor/instructor.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructorClassDashboardComponent,
    InstructorStudentDashboardComponent,
    InstructorStudentDetailViewComponent,
    InstructorAddCompetenciesComponent,
    StudentViewComponent,
    HomePageComponent,
    NavigationBarComponent,
    OfferComponent,
    TechStackComponent,
    FooterComponent,
    InstructorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
