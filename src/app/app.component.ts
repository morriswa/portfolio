import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgClass, NgForOf, NgStyle} from "@angular/common";

const BUTTONS = [
  { path:'/education', name:'Education' },
  { path:'/experience', name:'Experience' },
  { path:'/projects', name:'Projects' },
  // { path:'/work', name:'Work With Me' },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    RouterLink,
    NgStyle,
    NgClass,
    NgForOf,
  ],
  standalone: true
})
export class AppComponent {

  title = 'portfolio';
  is_collapsed = true;
  navbarButtons = BUTTONS;

  constructor(private router: Router) {}

  closeMobileNav() {
    this.is_collapsed = true;
  }

  isOnMainPage(): boolean {
    let currentPath = this.router.url;
    return currentPath === '/'
  }
}
