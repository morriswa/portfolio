import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dual-content-header',
  templateUrl: './dual-content-header.component.html',
  styleUrls: ['./dual-content-header.component.scss']
})
export class DualContentHeaderComponent {
@Input() primaryHeader!:string;
@Input() secondaryHeader!:string;
@Input() includeBean!:boolean;
@Input() topperImageUrl!:string;
}
