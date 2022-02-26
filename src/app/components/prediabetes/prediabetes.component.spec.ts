import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediabetesComponent } from './prediabetes.component';

describe('PrediabetesComponent', () => {
  let component: PrediabetesComponent;
  let fixture: ComponentFixture<PrediabetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrediabetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrediabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
