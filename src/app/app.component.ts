import {Component, computed, HostListener, inject, Signal, signal, WritableSignal} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {AsyncPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";

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

    NgIf,
    MatMenuTrigger,
    MatMenuItem,
    MatMenu,
  ],
  standalone: true
})
export class AppComponent {

  screenWidth: WritableSignal<number> = signal(window.innerWidth);
  mobileStyles: Signal<boolean> = computed(()=>this.screenWidth() <= 800)
  navbarButtons = BUTTONS;
  private router = inject(Router)

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
  }

  isOnMainPage(): boolean {
    let currentPath = this.router.url;
    return currentPath === '/'
  }
}
