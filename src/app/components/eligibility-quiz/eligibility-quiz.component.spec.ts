import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityQuizComponent } from './eligibility-quiz.component';

describe('EligibilityQuizComponent', () => {
  let component: EligibilityQuizComponent;
  let fixture: ComponentFixture<EligibilityQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilityQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
