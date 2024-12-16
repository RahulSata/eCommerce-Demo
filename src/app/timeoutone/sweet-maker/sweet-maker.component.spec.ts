import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOutOneC2Component } from './sweet-maker.component';

describe('TimeOutOneC2Component', () => {
  let component: TimeOutOneC2Component;
  let fixture: ComponentFixture<TimeOutOneC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeOutOneC2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOutOneC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
