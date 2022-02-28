import { TestBed } from '@angular/core/testing';

import { IsVerifiedGuard } from './is-verified.guard';

describe('IsVerifiedGuard', () => {
  let guard: IsVerifiedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsVerifiedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
