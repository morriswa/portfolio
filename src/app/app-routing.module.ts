import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectDemoComponent } from './components/projects/projects.component';
import { WorkWithMeComponent } from './components/work-with-me/work-with-me.component';
import { FullscreenPhotoComponent } from './components/fullscreen-photo/fullscreen-photo.component';

const routes: Routes = [
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectDemoComponent },
  { path: 'work', component: WorkWithMeComponent },
  { path: '', component: FullscreenPhotoComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
