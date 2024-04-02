import { enableProdMode } from '@angular/core';
import { environment } from 'src/environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "src/app/app.component";
import {provideRouter} from "@angular/router";
import {routes} from "src/app/routes";
import {provideAnimations} from "@angular/platform-browser/animations";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
  ]
}).catch(err => console.error(err));
