import { TestBed, async } from '@angular/core/testing';

import { Component } from './.component';

describe('Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Component
      ],
    }).compileComponents();
  }));

  it('should create the ', async(() => {
    const fixture = TestBed.createComponent(Component);
    const  = fixture.debugElement.componentInstance;
    expect().toBeTruthy();
  }));

  it(`should have as title ''`, async(() => {
    const fixture = TestBed.createComponent(Component);
    const  = fixture.debugElement.componentInstance;
    expect(.title).toEqual('');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to !');
  }));
});
