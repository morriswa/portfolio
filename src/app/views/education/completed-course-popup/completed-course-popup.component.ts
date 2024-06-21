import { Component } from '@angular/core';
import {COMPLETED_COURSES} from "../../../completed-courses";
import {NgForOf} from "@angular/common";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-completed-course-popup',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './completed-course-popup.component.html',
})
export class CompletedCoursePopupComponent {

  readonly COURSES = COMPLETED_COURSES;

  constructor(public currentWindow: MatDialogRef<CompletedCoursePopupComponent>) { }

  protected readonly window = window;
}
