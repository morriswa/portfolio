import { Component } from '@angular/core';
import { IMAGE_LIBRARY } from 'src/app/constants/images';

@Component({
  selector: 'app-tab-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectDemoComponent {
  IMAGE_LIBRARY=IMAGE_LIBRARY;
}
