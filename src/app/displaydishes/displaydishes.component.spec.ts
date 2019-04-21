import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydishesComponent } from './displaydishes.component';

describe('DisplaydishesComponent', () => {
  let component: DisplaydishesComponent;
  let fixture: ComponentFixture<DisplaydishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
