import { Component } from '@angular/core';

const BUTTONS = [
  { path:'/education', name:'Education' },
  { path:'/experience', name:'Experience' },
  { path:'/projects', name:'Projects' },
  { path:'/work', name:'Work With Me' },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  is_collapsed = true;

  navbarButtons = BUTTONS;

  closeMobileNav() {
    this.is_collapsed = true;
  }
}
