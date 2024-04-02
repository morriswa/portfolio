import { Component } from '@angular/core';
import { IMAGE_LIBRARY } from 'src/app/images';
import {DualContentHeaderComponent} from "../shared/dual-content-header/dual-content-header.component";
import {CommonPageHeaderComponent} from "../shared/common-page-header/common-page-header.component";

@Component({
  selector: 'app-tab-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [
    DualContentHeaderComponent,
    CommonPageHeaderComponent,
  ],
  standalone: true
})
export class ExperienceComponent {
  IMAGE_LIBRARY=IMAGE_LIBRARY;
}
