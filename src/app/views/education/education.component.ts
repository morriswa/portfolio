import {Component} from '@angular/core';
import { IMAGE_LIBRARY } from 'src/app/images';
import {DualContentHeaderComponent} from "../../components/dual-content-header/dual-content-header.component";
import {CommonPageHeaderComponent} from "../../components/common-page-header/common-page-header.component";
import {NgFor} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {CompletedCoursePopupComponent} from "./completed-course-popup/completed-course-popup.component";


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  imports: [
    DualContentHeaderComponent,
    CommonPageHeaderComponent,

    NgFor,

  ],
  providers: [],
  standalone: true
})
export class EducationComponent {

  IMAGE_LIBRARY = IMAGE_LIBRARY;

  constructor(private modalService: MatDialog) {}

  openCompletedCoursePopup() {
    this.modalService.open(CompletedCoursePopupComponent)
  }
}
