import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAndTravelComponent } from './work-and-travel.component';

describe('WorkAndTravelComponent', () => {
  let component: WorkAndTravelComponent;
  let fixture: ComponentFixture<WorkAndTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAndTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAndTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
