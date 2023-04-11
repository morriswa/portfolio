import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDeleteEffectComponent } from './type-delete-effect.component';

describe('TypeDeleteEffectComponent', () => {
  let component: TypeDeleteEffectComponent;
  let fixture: ComponentFixture<TypeDeleteEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeDeleteEffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeDeleteEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
