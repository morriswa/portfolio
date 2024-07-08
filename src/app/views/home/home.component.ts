import { Component } from '@angular/core';
import { IMAGE_LIBRARY } from 'src/app/images';
import {TypeDeleteEffectComponent} from "../../components/type-delete-effect/type-delete-effect.component";
import {Router} from "@angular/router";

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

  constructor(router: Router) {
    router.navigate(['/'])
  }
}
