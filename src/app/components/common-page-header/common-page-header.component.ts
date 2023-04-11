import { Component, Input } from '@angular/core';
import { IMAGE_LIBRARY } from 'src/app/images';

@Component({
  selector: 'app-common-page-header',
  templateUrl: './common-page-header.component.html',
  styleUrls: ['./common-page-header.component.scss']
})
export class CommonPageHeaderComponent {
  @Input() headerText!: string;
  @Input() logos!: string[];
}
