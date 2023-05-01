import { Component } from '@angular/core';
import { IMAGE_LIBRARY } from 'src/app/constants/images';

@Component({
  selector: 'app-fullscreen-photo',
  templateUrl: './fullscreen-photo.component.html',
  styleUrls: ['./fullscreen-photo.component.scss']
})
export class FullscreenPhotoComponent {
  IMAGE_LIBRARY=IMAGE_LIBRARY
}
