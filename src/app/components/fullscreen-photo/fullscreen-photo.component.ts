import { Component } from '@angular/core';
import { IMAGE_LIBRARY } from 'src/app/images';
import {TypeDeleteEffectComponent} from "../shared/type-delete-effect/type-delete-effect.component";

@Component({
  selector: 'app-fullscreen-photo',
  templateUrl: './fullscreen-photo.component.html',
  styleUrls: ['./fullscreen-photo.component.scss'],
  imports: [
    TypeDeleteEffectComponent
  ],
  standalone: true
})
export class FullscreenPhotoComponent {
  IMAGE_LIBRARY=IMAGE_LIBRARY
}
