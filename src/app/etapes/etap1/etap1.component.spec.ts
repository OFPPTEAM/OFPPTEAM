import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Etap1Component } from './etap1.component';

describe('Etap1Component', () => {
  let component: Etap1Component;
  let fixture: ComponentFixture<Etap1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Etap1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Etap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
