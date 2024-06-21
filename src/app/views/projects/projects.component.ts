import { Component } from '@angular/core';
import { IMAGE_LIBRARY } from 'src/app/images';
import {DualContentHeaderComponent} from "../../components/dual-content-header/dual-content-header.component";
import {CommonPageHeaderComponent} from "../../components/common-page-header/common-page-header.component";

@Component({
  selector: 'app-tab-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [
    CommonPageHeaderComponent,
    DualContentHeaderComponent
  ],
  standalone: true,
})
export class ProjectDemoComponent {
  IMAGE_LIBRARY=IMAGE_LIBRARY;
}
