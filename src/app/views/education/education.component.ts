import {Component, TemplateRef} from '@angular/core';
import { IMAGE_LIBRARY } from 'src/app/images';
import {COMPLETED_COURSES} from "../../completed-courses";
import {DualContentHeaderComponent} from "../../components/dual-content-header/dual-content-header.component";
import {CommonPageHeaderComponent} from "../../components/common-page-header/common-page-header.component";
import {NgFor} from "@angular/common";
import {BsModalRef, BsModalService, ModalModule} from "ngx-bootstrap/modal";


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  imports: [
    DualContentHeaderComponent,
    CommonPageHeaderComponent,

    NgFor,

    ModalModule
  ],
  providers: [BsModalService],
  standalone: true
})
export class EducationComponent {

  IMAGE_LIBRARY = IMAGE_LIBRARY;
  COURSES=COMPLETED_COURSES;




  completedCoursesModal?: BsModalRef;

  constructor(private modalService: BsModalService) {}


  /**
   * Opens a Modal from its Template Ref
   *
   * @param content a Template Reference to the Modal to be opened
   */
  openModalWithRef(content:TemplateRef<any>): void {
    this.completedCoursesModal = this.modalService.show(content, {
      animated: true
    });
  }


  /**
   * Opens a Modal from its Template Ref
   *
   * @param content a Template Reference to the Modal to be opened
   */
  closeModal(): void {
    const modalElement: HTMLElement | null = document.querySelector('.modal.show');
    modalElement?.classList.remove('show');
    this.completedCoursesModal?.hide()
  }
}
