import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithMeComponent } from './work-with-me.component';

describe('EducationComponent', () => {
  let component: WorkWithMeComponent;
  let fixture: ComponentFixture<WorkWithMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWithMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkWithMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
