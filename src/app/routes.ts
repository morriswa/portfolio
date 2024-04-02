import {Routes} from "@angular/router";
import {EducationComponent} from "./components/education/education.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {ProjectDemoComponent} from "./components/projects/projects.component";
import {FullscreenPhotoComponent} from "./components/fullscreen-photo/fullscreen-photo.component";

export const routes: Routes = [
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectDemoComponent },
  // { path: 'work', component: WorkWithMeComponent },
  { path: '', component: FullscreenPhotoComponent, pathMatch: 'full'}
];
