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
import { CommonPageHeaderComponent } from './components/common-page-header/common-page-header.component';
import { DualContentHeaderComponent } from './components/dual-content-header/dual-content-header.component';
import { TypeDeleteEffectComponent } from './components/type-delete-effect/type-delete-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectDemoComponent,
    WorkWithMeComponent,
    FullscreenPhotoComponent,
    CommonPageHeaderComponent,
    DualContentHeaderComponent,
    TypeDeleteEffectComponent,
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
