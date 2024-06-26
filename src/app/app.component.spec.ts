import { TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import {provideRouter} from "@angular/router";
import {routes} from "./routes";
import {provideAnimations} from "@angular/platform-browser/animations";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        provideAnimations()
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
