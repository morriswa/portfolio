import { Component, Input } from '@angular/core';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-common-page-header',
  templateUrl: './common-page-header.component.html',
  styleUrls: ['./common-page-header.component.scss'],
  imports: [
    NgFor,
  ],
  standalone: true
})
export class CommonPageHeaderComponent {
  @Input() headerText!: string;
  @Input() logos!: string[];
}
