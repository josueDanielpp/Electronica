import { TestBed } from '@angular/core/testing';

import { LimitesTransistorService } from './limites-transistor.service';

describe('LimitesTransistorService', () => {
  let service: LimitesTransistorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LimitesTransistorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
