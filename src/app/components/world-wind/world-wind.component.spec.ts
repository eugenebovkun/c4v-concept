import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldWindComponent } from './world-wind.component';

describe('WorldWindComponent', () => {
  let component: WorldWindComponent;
  let fixture: ComponentFixture<WorldWindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldWindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
