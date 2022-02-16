import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregencyComponent } from './pregency.component';

describe('PregencyComponent', () => {
  let component: PregencyComponent;
  let fixture: ComponentFixture<PregencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
