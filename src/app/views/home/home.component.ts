import {Component, inject, OnInit} from '@angular/core';
import { IMAGE_LIBRARY } from 'src/app/images';
import {TypeDeleteEffectComponent} from "../../components/type-delete-effect/type-delete-effect.component";
import {Router} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    TypeDeleteEffectComponent,
    NgOptimizedImage
  ],
  standalone: true
})
export class HomeComponent implements OnInit {

  IMAGE_LIBRARY=IMAGE_LIBRARY


  router = inject(Router)

  ngOnInit(): void {
    this.router.navigate(['/'])
  }
}
