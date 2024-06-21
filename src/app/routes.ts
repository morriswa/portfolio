import {Routes} from "@angular/router";
import {EducationComponent} from "./views/education/education.component";
import {ExperienceComponent} from "./views/experience/experience.component";
import {ProjectDemoComponent} from "./views/projects/projects.component";
import {HomeComponent} from "./views/home/home.component";

export const routes: Routes = [
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectDemoComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'}
];
