import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';

const routes: Routes = [
  { path: 'education', component: EducationComponent },
  { path: '', redirectTo: '/education', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
