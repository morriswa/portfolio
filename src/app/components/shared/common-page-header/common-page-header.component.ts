import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-page-header',
  templateUrl: './common-page-header.component.html',
  styleUrls: ['./common-page-header.component.scss']
})
export class CommonPageHeaderComponent {
  @Input() headerText!: string;
  @Input() logos!: string[];
}
