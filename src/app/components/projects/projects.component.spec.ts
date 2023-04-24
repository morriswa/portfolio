import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDemoComponent } from './projects.component';

describe('ProjectDemoComponent', () => {
  let component: ProjectDemoComponent;
  let fixture: ComponentFixture<ProjectDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
