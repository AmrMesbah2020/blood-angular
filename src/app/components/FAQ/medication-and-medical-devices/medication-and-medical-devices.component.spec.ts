import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationAndMedicalDevicesComponent } from './medication-and-medical-devices.component';

describe('MedicationAndMedicalDevicesComponent', () => {
  let component: MedicationAndMedicalDevicesComponent;
  let fixture: ComponentFixture<MedicationAndMedicalDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationAndMedicalDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationAndMedicalDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
