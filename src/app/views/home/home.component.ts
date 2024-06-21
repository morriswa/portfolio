import { Component } from '@angular/core';
import { IMAGE_LIBRARY } from 'src/app/images';
import {TypeDeleteEffectComponent} from "../../components/type-delete-effect/type-delete-effect.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    TypeDeleteEffectComponent
  ],
  standalone: true
})
export class HomeComponent {
  IMAGE_LIBRARY=IMAGE_LIBRARY
}
