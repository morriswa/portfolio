import {Component, HostListener} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {AsyncPipe, NgClass, NgForOf, NgStyle} from "@angular/common";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {BehaviorSubject} from "rxjs";

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
    AsyncPipe,

    BsDropdownModule,
  ],
  standalone: true
})
export class AppComponent {

  title = 'portfolio';
  menuIsOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  navbarButtons = BUTTONS;

  constructor(private router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.menuIsOpen$.next(window.innerWidth > 800);
  }

  isOnMainPage(): boolean {
    let currentPath = this.router.url;
    return currentPath === '/'
  }
}
