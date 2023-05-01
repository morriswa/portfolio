import {Component, TemplateRef} from '@angular/core';
import { IMAGE_LIBRARY } from 'src/app/constants/images';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {COMPLETED_COURSES} from "../../constants/completed-courses";


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  IMAGE_LIBRARY = IMAGE_LIBRARY;
  COURSES=COMPLETED_COURSES;
  constructor(private modalService: NgbModal) {}


  /**
   * Opens a Modal from its Template Ref
   *
   * @param content a Template Reference to the Modal to be opened
   */
  openModalWithRef(content:TemplateRef<any>): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
