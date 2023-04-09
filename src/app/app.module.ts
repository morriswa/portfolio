// NG
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Bootstrap
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// APP
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from 'src/app/components/experience/experience.component';
import { ProjectDemoComponent } from './components/projects/projects.component';
import { WorkWithMeComponent } from './components/work-with-me/work-with-me.component';
import { FullscreenPhotoComponent } from './components/fullscreen-photo/fullscreen-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectDemoComponent,
    WorkWithMeComponent,
    FullscreenPhotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
