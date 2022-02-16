import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCounterComponent } from './dash-counter.component';

describe('DashCounterComponent', () => {
  let component: DashCounterComponent;
  let fixture: ComponentFixture<DashCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
