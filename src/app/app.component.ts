import {Component, HostListener, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {AsyncPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
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
    NgIf,
  ],
  standalone: true
})
export class AppComponent implements OnInit{

  title = 'portfolio';
  mobileStyles$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  navbarButtons = BUTTONS;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mobileStyles$.next(window.innerWidth <= 800);
  }

  @HostListener('window:resize')
  onResize() {
    this.mobileStyles$.next(window.innerWidth <= 800);
  }

  isOnMainPage(): boolean {
    let currentPath = this.router.url;
    return currentPath === '/'
  }
}
