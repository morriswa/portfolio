import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenPhotoComponent } from './fullscreen-photo.component';

describe('FullscreenPhotoComponent', () => {
  let component: FullscreenPhotoComponent;
  let fixture: ComponentFixture<FullscreenPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullscreenPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
