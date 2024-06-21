import { Component, Input } from '@angular/core';
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-dual-content-header',
  templateUrl: './dual-content-header.component.html',
  styleUrls: ['./dual-content-header.component.scss'],
  imports: [
    NgIf,
    NgFor,
  ],
  standalone: true
})
export class DualContentHeaderComponent {
@Input() primaryHeader!:string;
@Input() secondaryHeader!:string;
@Input() includeBean!:boolean;
@Input() topperImageUrl!:string;
}
