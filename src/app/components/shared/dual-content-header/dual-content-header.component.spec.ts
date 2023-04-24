import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualContentHeaderComponent } from './dual-content-header.component';

describe('DualContentHeaderComponent', () => {
  let component: DualContentHeaderComponent;
  let fixture: ComponentFixture<DualContentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualContentHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DualContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
